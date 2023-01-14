import classNames from 'classnames/bind';

import style from './Video.module.scss';

const cx = classNames.bind(style);

const Video = ({ src, width, height, title }) => {
  return (
    <div>
      <iframe
        width="850"
        height="420"
        src={src} /* "https://www.youtube.com/embed/rCHLweZg6uk" */
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
