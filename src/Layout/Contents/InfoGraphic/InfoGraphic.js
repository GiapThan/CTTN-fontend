import classNames from 'classnames/bind';
import { useEffect } from 'react';

import img from '../../../Access/infographic.png';
import styles from './InfoGraphic.module.scss';

const cx = classNames.bind(styles);

const InfoGraphic = () => {
  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <img src={img} alt=""></img>
      </div>
    </div>
  );
};

export default InfoGraphic;
