import './BgVideo.css'; // Import the styles for the video background

const BgVideo = () => {
  return (
    <video autoPlay loop muted playsInline className="background-video">
      <source src="bgvid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BgVideo;