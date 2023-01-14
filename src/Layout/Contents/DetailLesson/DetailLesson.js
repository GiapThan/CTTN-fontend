import classNames from 'classnames/bind';
import Video from '../../../Components/Video/Video';

import style from './DetailLesson.module.scss';

const cx = classNames.bind(style);

const DetailLesson = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <Video src="https://www.youtube.com/embed/rCHLweZg6uk" />
      </div>
      <div className={cx('heading')}>
        <div className={cx('title')}>
          <h2 className={cx('name-lesson')}>Bài 1: Khái niệm vectơ</h2>
          <p className={cx('update')}>Cập nhật ngày tháng 2 năm 2023</p>
        </div>
        <div className={cx('action')}>
          <button className={cx('btn-open-doc')}>Xem tài liệu</button>
        </div>
      </div>
      <div className={cx('description')}>
        <p>
          Đây là nội dung mô tả của bài học... <br /> Bạn thích ghi gì thì ghi
        </p>
      </div>
    </div>
  );
};

export default DetailLesson;
