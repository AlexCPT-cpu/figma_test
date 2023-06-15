import { FaDiscord, FaTwitter } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    const modal = document.querySelector("[data-modal]");
    modal.close();
    console.log("close");
  };

  const handleOpen = () => {
    console.log("open");
    setOpen(true);
    const modal = document.querySelector("[data-modal]");
    modal.showModal();
  };

  return (
    <>
      <div className="w-full justify-center items-center flex-row py-6 px-8 hidden lg:flex">
        <div className="flex flex-row w-[100%] h-16">
          <div className=" border-[0.1px] h-full w-[10%] border-gray-200/20"></div>
          <div className="bg-[#00FFE6] h-full w-[12%]"></div>
          <div className=" border-[0.1px] h-full w-[78%] border-gray-200/20 bg-white/30"></div>
        </div>

        <div className="flex flex-row w-full h-16 justify-center items-center text-center text-xs">
          <div className=" border-[0.1px] h-full w-[45%] border-gray-200/20 mt-auto flex justify-center pt-5 relative">
            About <span className="absolute bottom-1 left-4 text-xs">001</span>
          </div>
          <div className=" border-[0.1px] h-full w-[25%] border-gray-200/20 mt-auto flex justify-center pt-5 relative">
            <FaDiscord size={20} color="white" />{" "}
            <span className="absolute bottom-1 left-4 text-xs">001</span>
          </div>
          <div className=" border-[0.1px] h-full w-[25%] border-gray-200/20 mt-auto flex justify-center pt-5 relative">
            <FaTwitter size={20} color="white" />{" "}
            <span className="absolute bottom-1 left-4 text-xs">001</span>
          </div>
          <div className=" border-[0.1px] h-full w-[45%] border-gray-200/20 mt-auto flex justify-center pt-5 relative">
            Launch Ultraverse
            <span className="absolute bottom-1 left-4 text-xs">001</span>
          </div>
          <div className=" border-[0.1px] h-full w-[15%] border-gray-200/20 mt-auto flex justify-center items-center flex-col space-y-2 cursor-pointer">
            <span className="border-t border-t-gray-200/20 w-10"></span>
            <span className="border-t border-t-gray-200/20 w-8 ml-2"></span>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden transition delay-75 ">
        {!open ? (
          <div
            onClick={handleOpen}
            className="transition delay-75 border-[0.1px] w-16 h-16 border-gray-200/20 flex justify-center items-center mt-6 flex-col space-y-2 cursor-pointer ml-auto mr-6"
          >
            <span className="border-t border-t-gray-200/20 w-8"></span>
            <span className="border-t border-t-gray-200/20 w-6 ml-2"></span>
          </div>
        ) : (
          <div
            onClick={handleClose}
            className="transition delay-75  border-[0.1px] w-16 h-16 border-gray-200/20 flex justify-center items-center mt-6 flex-col space-y-2 cursor-pointer ml-auto mr-6"
          >
            <XMarkIcon color="white" className="w-12 outline-1" />
          </div>
        )}
      </div>

      <dialog
        data-modal
        className="transition-all min-h-screen w-[100%] backdrop-blur-3xl bg-black text-white text-center"
      >
        <div
          onClick={handleClose}
          className="transition delay-75  border-[0.1px] w-16 h-16 border-gray-200/20 flex justify-center items-center mt-6 flex-col space-y-2 cursor-pointer ml-auto mr-6"
        >
          <XMarkIcon color="white" className="w-12 outline-1" />
        </div>
        <div className="w-[100%] h-[100%] relative flex justify-center items-center mt-[70%] md:mt-[30%]">
          <div className="flex flex-col w-full h-16 justify-center items-center text-center text-xs">
            <div className=" border-[0.1px] w-80 py-6 border-gray-200/20 mt-auto flex justify-center relative cursor-pointer">
              About{" "}
              <span className="absolute bottom-1 left-4 text-xs">001</span>
            </div>
            <div className=" border-[0.1px] w-80 py-6 border-gray-200/20 mt-auto flex justify-center relative cursor-pointer">
              <FaDiscord size={20} color="white" />{" "}
              <span className="absolute bottom-1 left-4 text-xs">001</span>
            </div>
            <div className=" border-[0.1px] w-80 py-6 border-gray-200/20 mt-auto flex justify-center relative cursor-pointer">
              <FaTwitter size={20} color="white" />{" "}
              <span className="absolute bottom-1 left-4 text-xs">001</span>
            </div>
            <div className=" border-[0.1px] w-80 py-6 border-gray-200/20 mt-auto flex justify-center relative cursor-pointer">
              Launch Ultraverse
              <span className="absolute bottom-1 left-4 text-xs">001</span>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
