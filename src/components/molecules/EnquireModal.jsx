"use client";
import Image from "next/image";
import CloseModal from "../atoms/CloseModal";
import { useDispatch, useSelector } from "react-redux";

const EnquireModal = () => {
    const { isModal } = useSelector((state) => state.modal);

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 z-40 w-full max-w-[420px] bg-white transition-all duration-500 ease-in-out ${isModal === "enquire" ? "translate-x-0" : "translate-x-full"}`}
        >


            <CloseModal />
        </div>
    );
};

export default EnquireModal;