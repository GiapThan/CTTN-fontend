import { useEffect } from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Discovery as DiscoveryDB } from '../../../Access/db';
import style from './Discovery.module.scss';

const cx = className.bind(style);

const Discovery = () => {
  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });

  return (
    <div className={cx('wrapper')}>
      {DiscoveryDB.map((e, i) => (
        <div className={cx('item')} key={i}>
          <h3 className={cx('title')}>
            <FontAwesomeIcon icon={faStar} />
            {e.name}
          </h3>
          <p className={cx('description')}>{e.description}</p>
          <div
            style={{
              backgroundImage: `url(${e.linkAvt})`,
            }}
            className={cx('has-link')}
          >
            <div className={cx('overlay')}></div>
            <button className={cx('cta-btn')}>Xem chi tiết</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discovery;
