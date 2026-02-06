"use client";
import { useModal } from "@/hooks/useModal";
import Icon from "./Icon";

const CloseModal = ({ className }) => {
  const { closeModal } = useModal();

  return (
    <button
      className="absolute top-5 right-5 cursor-pointer"
      onClick={() => closeModal()}
    >
      <Icon className={`${className} fi-rr-cross text-lambda text-2xl`} />
    </button>
  );
};

export default CloseModal;
