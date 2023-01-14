import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { publicRoutes } from '../../Routes';

const cx = classNames.bind(styles);

function Header() {
  const UserInfor = useSelector((state) => state.user);
  const navigation = useNavigate();

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('logo-wrapper')}>
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
    </>
  );
}

export default Header;