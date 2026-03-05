import React from "react";

const IntroVideo = () => {
  return (
    <section className=" w-full h-full m-24 rounded-xl ">
      <video
        src="/introVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover rounded-xl"
      />
    </section>
  );
};

export default IntroVideo;
