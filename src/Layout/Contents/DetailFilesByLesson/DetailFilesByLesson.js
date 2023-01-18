import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import { Document, Lesson, group } from '../../../Access/db';
import { publicRoutes } from '../../../Routes';
import style from './DetailFilesByLesson.module.scss';

const cx = className.bind(style);

const DetailFilesByLesson = (props) => {
  const navigation = useNavigate();

  /* props = {idLesson} */

  const [files, setFiles] = useState([]);
  const [nameGroup, setNameGroup] = useState('');
  const [nameLesson, setNameLesson] = useState('');

  useEffect(() => {
    const newArr = Document.filter((e) => e.idLesson === props.idLesson);
    const lesson = Lesson.find((e) => e.id === props.idLesson);
    const { name } = group.find((e) => e.id === lesson.groupId);
    setNameGroup(name);
    setNameLesson(lesson.name);
    setFiles(newArr);
  }, [props.idLesson]);

  const handleDownloadFile = (fileName, linkDownload) => {
    const aTag = document.createElement('a');
    aTag.href = linkDownload;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className={cx('wrapper')}>
      <h4>{nameGroup}</h4>
      <h3 className={cx('title')}>{nameLesson}</h3>
      <section className={cx('body')}>
        {files.map((e, i) => (
          <section key={i} className={cx('item')}>
            <div
              style={{
                backgroundImage: `url(${e.linkBackg})`,
              }}
              className={cx('has-link')}
            >
              <div className={cx('overlay')}></div>
              <div className={cx('cta-btn')}>
                <button
                  onClick={() => navigation(`${publicRoutes.docById}/${e.id}`)}
                >
                  Xem tài liệu
                </button>
                <button
                  onClick={() => handleDownloadFile(e.name, e.linkDownload)}
                >
                  Tải tài liệu
                </button>
              </div>
            </div>
            <h4 className={cx('title')}>
              <Link to={`${publicRoutes.docById}/${e.id}`}>{e.name}</Link>
            </h4>
          </section>
        ))}
      </section>
    </div>
  );
};

export default DetailFilesByLesson;
