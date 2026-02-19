"use client";
import { setIsModal, setModalData } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (type, data = null) => {
    dispatch(setIsModal(type));
    dispatch(setModalData(data));
    document.body.classList.add("hide-scroll");
  };

  const closeModal = () => {
    dispatch(setIsModal(null));
    document.body.classList.remove("hide-scroll");
  };

  return { openModal, closeModal };
};
