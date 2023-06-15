import { GiSoundWaves } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 px-10 mt-20 w-full relative h-full">
      <div className="space-y-5 ml-10 md:ml-32 lg:ml-0">
        <div className="text-[#00FFE6] flex flex-row">
          <div className="flex flex-row space-x-1 mr-3">
            <div className="flex border-white   h-6 w-[5px] rounded-[1px] bg-[#00FFE6]"></div>
            <div className="flex border-white   h-6 w-[3px] rounded-[1px] bg-[#00FFE6]"></div>
          </div>
          MAP
        </div>

        <div className="flex flex-row gray-text">
          <div className="flex flex-row space-x-1 mr-3">
            <div className="flex border-white   h-6 w-[5px] rounded-[1px] gray-bg"></div>
            <div className="flex border-white   h-6 w-[3px] rounded-[1px] gray-bg"></div>
          </div>
          MISSIONS
        </div>
        <div className="flex flex-row gray-text">
          <div className="flex flex-row space-x-1 mr-3">
            <div className="flex border-white   h-6 w-[5px] rounded-[1px] gray-bg"></div>
            <div className="flex border-white   h-6 w-[3px] rounded-[1px] gray-bg"></div>
          </div>
          CHARACTERS
        </div>
        <div className="flex flex-row gray-text">
          <div className="flex flex-row space-x-1 mr-3">
            <div className="flex border-white   h-6 w-[5px] rounded-[1px] gray-bg"></div>
            <div className="flex border-white   h-6 w-[3px] rounded-[1px] gray-bg"></div>
          </div>
          LOADOUTS
        </div>
        <div className="flex flex-row gray-text">
          <div className="flex flex-row space-x-1 mr-3">
            <div className="flex border-white   h-6 w-[5px] rounded-[1px] gray-bg"></div>
            <div className="flex border-white   h-6 w-[3px] rounded-[1px] gray-bg"></div>
          </div>
          EVENTS
        </div>
      </div>
      <div className="absolute lg:bottom-20 lg:left-80 top-12 left-[600px]">
        <img src="/circle.jpg" className="w-28" alt="curve" />
      </div>

      <div>
        <div className="absolute left-16 top-[296px] md:left-56 md:top-[420px] lg:left-52 lg:top-[355px] text-sm gray-text">
          {" "}
          001
        </div>
        <div className="absolute left-24 top-[290px] md:left-64 md:top-[400px] text-[25px] md:text-[60px] lg:left-60 lg:top-80 lg:text-[100px]">
          IMMERSIVE
        </div>
        <div className="absolute left-32 top-[315px] md:left-80 md:top-[460px] text-[25px] md:text-[60px] lg:left-[450px] lg:top-[415px] lg:text-[100px]">
          METAVERSE
        </div>
      </div>

      <div
        onClick={() => navigate("/video")}
        className="absolute right-[12%] top-[400px] md:right-64 md:top-[570px] lg:right-10 lg:top-20 cursor-pointer"
      >
        <img
          alt="video"
          src="/video.jpg"
          className="md:w-[400px] md:h-[450px] w-[300px] h-[350px] object-cover"
        />
      </div>
      <div className="flex flex-col whitespace-normal text-center md:flex-row absolute top-[820px] left-0 md:top-[1100px] md:left-56 lg:top-[630px] lg:left-16 items-center justify-center text-xs">
        <div className="lg:mr-2 mr-0 md:mr-12">
          <GiSoundWaves color="white" size={60} />
        </div>
        <div className="text-sm break-words">
          {" "}
          UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO
          <br /> CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.
        </div>
      </div>
      <div className="md:h-[1000px] h-[800px] lg:h-[10px]"></div>
    </div>
  );
};

export default Main;
