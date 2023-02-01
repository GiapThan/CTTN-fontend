import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import ScrollList from '../ScrollList/ScrollList';
import { group } from '../../../Access/db';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const HomePage = () => {
  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });
  return (
    <div className={cx('wrapper')}>
      {group.map((e, i) => (
        <ScrollList key={i} titleGroup={e.name} idGroup={e.id} />
      ))}
    </div>
  );
};

export default HomePage;
