import React from "react";

type VideoComponentProps = {
    decoration?: React.ReactNode;
    videoUrl: string;
    videoId?: string;
    customClass?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
    videoId,
    videoUrl,
    decoration,
    customClass
}) => {
    return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        id={videoId}
        className={customClass}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {decoration}

    </>
    );
}

export default VideoComponent;


// <VideoComponent videoId="boxingVideo" videoUrl="/assets/videos/boxing1.mp4"
// customClass="block min-h-screen w-auto rounded-2xl object-cover"
// decoration={<div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/95 via-black/60 to-transparent" />} />
