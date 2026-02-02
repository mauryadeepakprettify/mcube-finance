"use client";
import { setIsModal, setModalData } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export const useModal = () => {
    const dispatch = useDispatch();

    const openModal = (type, data = null) => {
        dispatch(setIsModal(type));
        dispatch(setModalData(data));
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        dispatch(setIsModal(null));
        document.body.style.overflow = "auto";
    };

    return { openModal, closeModal };
};