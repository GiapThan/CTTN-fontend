import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../../Routes';

import style from './DetailFilesByLesson.module.scss';

const cx = className.bind(style);

const DetailFilesByLesson = (props) => {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>{props.lesson}</h3>
      <section className={cx('body')}>
        <section className={cx('item')}>
          <Link
            to={`${publicRoutes.lessonById}/1`}
            style={{
              backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1NmeRnjX0wNuYXVR1sWkwjD3AOwvbZNC_'})`,
            }}
            className={cx('has-link')}
          >
            <div className={cx('overlay')}></div>
            <button className={cx('cta-btn')}>Xem bài học</button>
          </Link>
          <h4 className={cx('title')}>
            <Link to={`${publicRoutes.lessonById}/1`}>Tên file</Link>
          </h4>
        </section>
        <section className={cx('item')}>
          <Link
            to={`${publicRoutes.lessonById}/1`}
            style={{
              backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1NmeRnjX0wNuYXVR1sWkwjD3AOwvbZNC_'})`,
            }}
            className={cx('has-link')}
          >
            <div className={cx('overlay')}></div>
            <button className={cx('cta-btn')}>Xem bài học</button>
          </Link>
          <h4 className={cx('title')}>
            <Link to={`${publicRoutes.lessonById}/1`}>Tên file</Link>
          </h4>
        </section>
        <section className={cx('item')}>
          <Link
            to={`${publicRoutes.lessonById}/1`}
            style={{
              backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1NmeRnjX0wNuYXVR1sWkwjD3AOwvbZNC_'})`,
            }}
            className={cx('has-link')}
          >
            <div className={cx('overlay')}></div>
            <button className={cx('cta-btn')}>Xem bài học</button>
          </Link>

          <h4 className={cx('title')}>
            <Link to={`${publicRoutes.lessonById}/1`}>Tên file</Link>
          </h4>
        </section>
      </section>
    </div>
  );
};

export default DetailFilesByLesson;
