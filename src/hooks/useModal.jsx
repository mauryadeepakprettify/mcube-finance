"use client";
import { setIsModal, setModalData } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export const useModal = () => {
    const dispatch = useDispatch();

    const openModal = (type, data = null) => {
        dispatch(setIsModal(type));
        dispatch(setModalData(data));
    };
    const closeModal = () => dispatch(setIsModal(null));

    return { openModal, closeModal };
};