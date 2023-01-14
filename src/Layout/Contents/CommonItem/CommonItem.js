import classNames from 'classnames/bind';

import styles from './CommonItem.module.scss';

const cx = classNames.bind(styles);

const CommonItem = (props) => {
  return <div className={cx('wrapper')}>{props.children}</div>;
};

export default CommonItem;
