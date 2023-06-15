import Main from "../components/Video/Main";
import Navbar from "../components/Navbar";

const Video = () => {
  return (
    <div className="min-h-screen relative bg-black">

      <div className="w-full h-full z-50 text-white">
        <Navbar />

        <Main />
      </div>
    </div>
  );
};

export default Video;
