import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';

import { Lesson } from '../../../Access/db';
import Video from '../../../Components/Video/Video';
import { publicRoutes } from '../../../Routes';
import style from './DetailLesson.module.scss';
import { setIdDocView } from '../../../Redux/documentSlice';

const cx = classNames.bind(style);

const DetailLesson = () => {
  const navigation = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [detailLesson, setDetailLesson] = useState({});

  useEffect(() => {
    const newArr = Lesson.filter((e) => e.id === params.id);
    setDetailLesson(...newArr);
  }, [params.id]);

  const handleOpenFile = () => {
    dispatch(setIdDocView({ idLesson: detailLesson.id }));
    navigation(publicRoutes.file);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <Video src={detailLesson.linkVideo} />
      </div>
      <div className={cx('heading')}>
        <div className={cx('title')}>
          <h2 className={cx('name-lesson')}>{detailLesson.name}</h2>
          <p className={cx('update')}>Cập nhật tháng 2 năm 2023</p>
        </div>
        <div className={cx('action')}>
          <button onClick={handleOpenFile} className={cx('btn-open-doc')}>
            Xem tài liệu
          </button>
        </div>
      </div>
      <div className={cx('description')}>
        <p>{detailLesson.description}</p>
      </div>
    </div>
  );
};

export default DetailLesson;
