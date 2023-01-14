import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../../Routes';

import CommonItem from '../CommonItem/CommonItem';
import styles from './ScrollList.module.scss';

const cx = classNames.bind(styles);

const ScrollList = (props) => {
  console.log(props);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h3>{props.titleCourse}</h3>
      </div>
      <div className={cx('body')}>
        <section className={cx('contents')}>
          <section className={cx('course-item')}>
            <CommonItem>
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
                <Link to={`${publicRoutes.lessonById}/1`}>
                  Bài 1: Khái niệm vectơ
                </Link>
              </h4>
            </CommonItem>
          </section>
          <section className={cx('course-item')}>
            <CommonItem>
              <Link
                to={`${publicRoutes.lessonById}/1`}
                style={{
                  backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=11r4FNPiHtprEOIPK4I5hidFPd0-PyR-x'})`,
                }}
                className={cx('has-link')}
              >
                <div className={cx('overlay')}></div>
                <button className={cx('cta-btn')}>Xem bài học</button>
              </Link>
              <h4 className={cx('title')}>
                <Link to={`${publicRoutes.lessonById}/2`}>
                  Bài 2: Tổng và hiệu 2 vectơ
                </Link>
              </h4>
            </CommonItem>
          </section>
          <section className={cx('course-item')}>
            <CommonItem>
              <Link
                to={`${publicRoutes.lessonById}/1`}
                style={{
                  backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1X_9jKANCXLex2lwCQghLnuzFp3kh1Fo1'})`,
                }}
                className={cx('has-link')}
              >
                <div className={cx('overlay')}></div>
                <button className={cx('cta-btn')}>Xem bài học</button>
              </Link>
              <h4 className={cx('title')}>
                <Link to={`${publicRoutes.lessonById}/3`}>
                  Bài 3: Tích của một số với một vectơ
                </Link>
              </h4>
            </CommonItem>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ScrollList;
