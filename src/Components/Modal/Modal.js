import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Portal from '../Portal/Portal';
import styles from './Modal.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
const Modal = ({
  isSideBar = false,
  shouldCloseOnOverlayClick = true,
  children,
  isOpenModal,
  onRequestClose,
  containerId,
}) => {
  const [closing, setClosing] = useState(false);
  const containerRef = useRef();

  const handleCloseModal = useCallback(() => {
    setClosing(true);
    containerRef.current.addEventListener(
      'animationend',
      () => {
        setClosing(false);
        onRequestClose();
      },
      {
        once: true,
      },
    );
  }, [onRequestClose]);

  useEffect(() => {
    const handle = (e) => {
      if (isOpenModal && e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handle);

    return () => document.removeEventListener('keydown', handle);
  }, [isOpenModal, handleCloseModal]);

  if (!isOpenModal) {
    return null;
  }

  return (
    <Portal containerId={containerId}>
      <div className={cx('wrapper', { closing })}>
        <div
          className={cx('overlay')}
          onClick={shouldCloseOnOverlayClick ? handleCloseModal : null}
        ></div>
        <div
          className={isSideBar ? cx('side-bar') : cx('container')}
          ref={containerRef}
        >
          <div className={cx('close-icon')} onClick={handleCloseModal}>
            <FontAwesomeIcon color="#50525a" fontSize="20px" icon={faXmark} />
          </div>

          <div className={cx('body', `${isSideBar ? 'side-bar-body' : ''}`)}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
