import React from "react";
import VideoMask from "@/components/ui/VideoMask";

const VideoMaskDemo = () => {
  return (
    <div className="relative h-[450px] w-full overflow-hidden primary-bg-dark -mb-10 mt-10">
      <VideoMask src="/videos/hero.mp4">Onay School</VideoMask>
    </div>
  );
};

export default VideoMaskDemo;
