import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import ScrollList from '../ScrollList/ScrollList';
const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <ScrollList titleCourse={'Toán lớp 10'} />
      <ScrollList titleCourse={'Toán lớp 11'} />
    </div>
  );
};

export default HomePage;
