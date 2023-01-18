const Video = ({ src, width, height, title }) => {
  return (
    <div>
      <iframe
        width="850"
        height="420"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
