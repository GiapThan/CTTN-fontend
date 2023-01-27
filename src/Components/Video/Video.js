import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Video.module.scss';

const cx = classNames.bind(style);

const Video = ({ src, title }) => {
  return (
    <div className={cx('video-container')}>
      <div
        className={cx('video-player')}
        style={{ width: '100%', height: '100%' }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
