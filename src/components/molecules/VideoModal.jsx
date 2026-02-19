"use client";
import { useSelector } from "react-redux";
import CloseModal from "../atoms/CloseModal";

const VideoModal = () => {
  const { isModal, modalData } = useSelector((state) => state.modal);

  return (
    <div
      className={`fixed top-1/2 left-1/2 z-40 aspect-video w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${isModal === "video" ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"}`}
    >
      <video
        className="h-full w-full border-2 border-white object-cover"
        src={modalData || `/video/clouds.mp4`}
        controls
      ></video>
      <CloseModal className="text-white" />
    </div>
  );
};

export default VideoModal;
