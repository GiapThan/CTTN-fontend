import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFile,
  faQuestion,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

import styles from './SideBar.module.scss';
import { publicRoutes } from '../../Routes';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const SideBar = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidthScreen(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      {widthScreen > 800 && (
        <div className={cx('wrapper')}>
          <div>
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
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <span>Giới thiệu</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
