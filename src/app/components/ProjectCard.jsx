

import React, { useRef } from "react";

const ProjectCard = ({ imgUrl, title, description, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to beginning
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="h-52 md:h-72 rounded-t-xl relative group flex items-center justify-center overflow-hidden">
        {/* Image (hidden on hover) */}
        <img
          src={imgUrl}
          alt={title}
          className={`absolute object-contain w-full h-full ${
    video ? "group-hover:hidden" : ""
  }`}
        />

        {/* Video (only visible on hover) */}
        {video && (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            className="absolute object-contain w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Overlay (only if no video) */}
        {!video && (
          <div className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
        )}
      </div>

      <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;


