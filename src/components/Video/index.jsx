import React from 'react';

const Video = ({ video }) => {
  const { id, link, description } = video;
  return (
    <div id={id}>
      <iframe
        className="rounded-xl w-full h-56"
        src={link}
        title="Pablo - How are you? | Cartoons for Kids #Autism"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p>{description}</p>
    </div>
  );
};

export default Video;
