import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../../Routes';

import MucLuc from '../../../Components/MucLuc/MucLuc';
import style from './DetailFiles.module.scss';
import DetailFilesByLesson from '../DetailFilesByLesson/DetailFilesByLesson';

const cx = className.bind(style);

const DetailFiles = () => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>Tài liệu tham khảo</h2>
      <MucLuc />
      {/* Bắt sự kiện click vào bài cần coi file xong call api bài đó */}
      <div className={cx('content')}>
        <section className={cx('group')}>
          <h4>Toán lớp 10</h4>
          <DetailFilesByLesson group={'Toán lớp 10'} lesson={'Bài 1: ...'} />
        </section>
      </div>
    </div>
  );
};

export default DetailFiles;
