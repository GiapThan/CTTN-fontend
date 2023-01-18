import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { publicRoutes } from '../../../Routes';
import CommonItem from '../CommonItem/CommonItem';
import styles from './ScrollList.module.scss';
import { Lesson } from '../../../Access/db';

const cx = classNames.bind(styles);

const ScrollList = (props) => {
  /* 
  props= {titleGroup: '',idGroup}
   */
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const newArr = Lesson.filter((e) => e.groupId === props.idGroup);
    setLesson(newArr);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h3>{props.titleGroup}</h3>
      </div>
      <div className={cx('body')}>
        <section className={cx('contents')}>
          {lesson.map((e, i) => (
            <section className={cx('course-item')}>
              <CommonItem>
                <Link
                  to={`${publicRoutes.lessonById}/${e.id}`}
                  style={{
                    backgroundImage: `url(${e.linkAvt})`,
                  }}
                  className={cx('has-link')}
                >
                  <div className={cx('overlay')}></div>
                  <button className={cx('cta-btn')}>Xem bài học</button>
                </Link>
                <h4 className={cx('title')}>
                  <Link to={`${publicRoutes.lessonById}/${e.id}`}>
                    {e.name}
                  </Link>
                </h4>
              </CommonItem>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ScrollList;
