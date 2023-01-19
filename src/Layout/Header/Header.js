import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { publicRoutes } from '../../Routes';
import { closeOpenSideBar } from '../../Redux/systemSlice';
import Modal from '../../Components/Modal/Modal';
import SideBarForMobile from '../SideBarForMobile/SideBarForMobile';

const cx = classNames.bind(styles);

function Header() {
  const UserInfor = useSelector((state) => state.user);
  const SystemRedux = useSelector((state) => state.system);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleOpenSideBar = () => {
    dispatch(closeOpenSideBar());
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('logo-wrapper')}>
          <FontAwesomeIcon
            onClick={handleOpenSideBar}
            className={cx('icon-bars')}
            icon={faBars}
          />
          <div
            onClick={() => navigation(publicRoutes.home)}
            className={cx('logo')}
          ></div>
          <strong>Lớp Sư phạm Toán B K48</strong>
        </div>

        <div className={cx('action')}>
          {!UserInfor.isLogin && (
            <>
              <button className={cx('login')}>
                <b>Đăng Nhập</b>
              </button>
              <button className={cx('signin')}>
                <b>Đăng Ký</b>
              </button>
            </>
          )}
        </div>
      </div>

      <Modal
        isOpenModal={SystemRedux.isOpenSideBar}
        containerId="side-bar"
        onRequestClose={handleOpenSideBar}
        isSideBar={true}
      >
        <SideBarForMobile />
      </Modal>
    </>
  );
}

export default Header;
