import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import style from './DetailDocumentById.module.scss';
import { Document } from '../../../Access/db';

const cx = className.bind(style);

const DetailDocumentById = () => {
  const params = useParams();

  const [doc, setDoc] = useState({});

  useEffect(() => {
    const docs = Document.find((e) => e.id === params.id);
    setDoc(docs);
  }, [params.id]);

  const handleDownloadFile = () => {
    const aTag = document.createElement('a');
    aTag.href = doc.linkDownload;
    aTag.setAttribute('download', doc.name);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

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
      <button onClick={handleDownloadFile} className={cx('download')}>
        <FontAwesomeIcon icon={faDownload} /> Tải tài liệu
      </button>
    </div>
  );
};

export default DetailDocumentById;
