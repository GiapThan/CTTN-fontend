import className from 'classnames/bind';
import { useSelector } from 'react-redux';

import MucLuc from '../../../Components/MucLuc/MucLuc';
import style from './DetailFiles.module.scss';
import DetailFilesByLesson from '../DetailFilesByLesson/DetailFilesByLesson';
import { useEffect } from 'react';

const cx = className.bind(style);

const DetailFiles = () => {
  const Document = useSelector((state) => state.document);

  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>Tài liệu tham khảo</h2>
      <MucLuc />

      <div className={cx('content')}>
        <section className={cx('group')}>
          {Document.idLesson !== '' ? (
            <DetailFilesByLesson idLesson={Document.idLesson} />
          ) : (
            <></>
          )}
        </section>
      </div>
    </div>
  );
};

export default DetailFiles;
