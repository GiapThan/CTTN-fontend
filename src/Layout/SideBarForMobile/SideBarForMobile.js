import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFile,
  faQuestion,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import styles from './SideBarForMobile.module.scss';
import { publicRoutes } from '../../Routes';

const cx = classNames.bind(styles);

const SideBarForMobile = () => {
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('list')}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? cx('list-item', 'active') : cx('list-item')
            }
            to={publicRoutes.home}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? cx('list-item', 'active') : cx('list-item')
            }
            to={publicRoutes.file}
          >
            <FontAwesomeIcon icon={faFile} />
            <span>Tài liệu</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? cx('list-item', 'active') : cx('list-item')
            }
            to={publicRoutes.cotheemkhongbiet}
          >
            <FontAwesomeIcon icon={faQuestion} />
            <span>Khám phá</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? cx('list-item', 'active') : cx('list-item')
            }
            to={publicRoutes.about}
          >
            <FontAwesomeIcon icon={faComment} />
            <span>Giới thiệu</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBarForMobile;
