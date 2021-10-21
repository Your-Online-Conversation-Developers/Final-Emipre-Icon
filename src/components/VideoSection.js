import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import VideoImg from "../bgs/video.webp"


const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="video-section" id="tvc" style={{backgroundImage: `url(${VideoImg})`}}>
      <div className="overlay">
        <div className="container">
          {/* .row */}
          <div className="row">
            <div className="col-md-3" />
            {/* .col */}
            <div className="col-md-6">
              <div className="video-border">
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="FfjquCruyQs"
                  onClose={() => setOpen(false)}
                />

      
                <button className="play-button" onClick={() => setOpen(true)}>
                <span className="pb-border-1">
                  <span className="pb-border-2">
                    <i className="icofont icofont-ui-play" />
                  </span>
                </span>
                </button>
                <h6>Play Now</h6>
              </div>
            </div>
            {/* .col */}
            <div className="col-md-3" />
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .overlay */}
    </div>
  );
};

export default VideoSection;
