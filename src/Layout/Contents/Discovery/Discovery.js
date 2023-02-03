import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Discovery as DiscoveryDB } from '../../../Access/db';
import style from './Discovery.module.scss';
import { publicRoutes } from '../../../Routes';

const cx = className.bind(style);

const Discovery = () => {
  const navigation = useNavigate();

  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });

  const handleRedirect = (element) => {
    console.log(element);
    if (element.isFile) {
      navigation(`${publicRoutes.cotheemkhongbiet}/${element.id}`);
    } else {
      const aTag = document.createElement('a');
      aTag.href = element.linkRedirect;
      aTag.setAttribute('target', '_blank');
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  };

  return (
    <div className={cx('wrapper')}>
      {DiscoveryDB.map((e, i) => (
        <div className={cx('item')} key={i}>
          <h3 onClick={() => handleRedirect(e)} className={cx('title')}>
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
            <button onClick={() => handleRedirect(e)} className={cx('cta-btn')}>
              Xem chi tiết
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discovery;
