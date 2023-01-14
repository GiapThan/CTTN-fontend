import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import style from './MucLuc.module.scss';

const cx = classNames.bind(style);

const MucLuc = () => {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Mục lục</h3>
      <div className={cx('group')}>
        <h4>Toán lớp 10</h4>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
        </ul>
      </div>
      <div className={cx('group')}>
        <h4>Toán lớp 10</h4>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
          <li className={cx('item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faShare} />
            <span>Bài 1: Khái niệm vecto</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MucLuc;
