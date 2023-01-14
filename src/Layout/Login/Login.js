import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login({ onChangeTypeModal }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, [dispatch]);

  return (
    <div className={cx('form-input')}>
      <div className={cx('title')}>Đăng Nhập</div>
      <div className={cx('form-control')}>
        <FontAwesomeIcon className={cx('befor-icon')} icon={faEnvelope} />
        <input
          placeholder="Email"
          autoComplete="on"
          type="email"
          value={email}
          onClick={() => setError('')}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={cx('form-control')}>
        <FontAwesomeIcon className={cx('befor-icon')} icon={faLock} />
        <input
          placeholder="Mật Khẩu"
          autoComplete="on"
          type={isShowPassword ? 'text' : 'password'}
          value={password}
          onClick={() => setError('')}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesomeIcon
          className={cx('show-password')}
          onClick={() => setIsShowPassword(!isShowPassword)}
          icon={isShowPassword ? faEye : faEyeSlash}
        />
      </div>
      <div className={cx('show-error')}>{error}</div>
      <div className={cx('option')}>
        <span>Quên mật khẩu</span>
        <span
          onClick={() => {
            onChangeTypeModal('SIGNUP_MODAL');
          }}
        >
          Chưa có tài khoản
        </span>
      </div>
    </div>
  );
}

export default Login;
