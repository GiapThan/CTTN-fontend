import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import ScrollList from '../ScrollList/ScrollList';
import { group } from '../../../Access/db';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      {group.map((e, i) => (
        <ScrollList key={i} titleGroup={e.name} idGroup={e.id} />
      ))}
    </div>
  );
};

export default HomePage;
