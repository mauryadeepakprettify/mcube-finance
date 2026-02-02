"use client";
import { useSelector } from "react-redux";
import { useModal } from "@/hooks/useModal";

const Overlay = () => {
    const { isModal } = useSelector((state) => state.modal);
    const { closeModal } = useModal();

    return (
        <div
            className={`fixed inset-0 z-30 flex cursor-pointer items-center justify-center bg-black/50 transition-opacity duration-500 ease-in-out ${isModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            onClick={closeModal}
        ></div>
    );
};

export default Overlay;