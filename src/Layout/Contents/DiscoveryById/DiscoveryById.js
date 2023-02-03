import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { Discovery as DiscoveryDB } from '../../../Access/db';
import style from './DiscoveryById.module.scss';

const cx = className.bind(style);

const DiscoveryById = () => {
  const params = useParams();

  const [doc, setDoc] = useState({});

  useEffect(() => {
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });

  useEffect(() => {
    let a = DiscoveryDB.filter((e) => e.id === params.id);
    setDoc(a[0]);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{doc.name}</h2>
      <div className={cx('file')}>
        <iframe
          title={doc.name}
          src={doc.linkFile}
          width={'100%'}
          height={'100%'}
        ></iframe>
      </div>
      <button
        onClick={() => {
          const aTag = document.createElement('a');
          aTag.href = doc.linkDownload;
          aTag.setAttribute('download', doc.name);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        }}
        className={cx('download')}
      >
        <FontAwesomeIcon icon={faDownload} /> Tải tài liệu
      </button>
    </div>
  );
};

export default DiscoveryById;
