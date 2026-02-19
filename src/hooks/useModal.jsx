"use client";
import { setIsModal, setModalData } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (type, data = null) => {
    dispatch(setIsModal(type));
    dispatch(setModalData(data));
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "8px";
  };

  const closeModal = () => {
    dispatch(setIsModal(null));
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0";
  };

  return { openModal, closeModal };
};
