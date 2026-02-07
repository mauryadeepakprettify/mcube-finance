"use client";
import CloseModal from "../atoms/CloseModal";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Icon from "../atoms/Icon";
import { useModal } from "@/hooks/useModal";

const MenuModal = () => {
  const { isModal } = useSelector((state) => state.modal);
  const { closeModal } = useModal();

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-40 w-full bg-white pt-16 pb-6 transition-all duration-500 ease-in-out lg:max-w-[420px] ${isModal === "menu" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-full flex-col justify-between">
        <ul className="overflow-y-auto px-6 *:mb-3 md:px-10">
          {data?.map(({ _id, label, route, subMenu }) => {
            return (
              <li onClick={closeModal} key={_id}>
                <Link
                  className="hover:text-primary transform text-3xl text-black/70 transition-all duration-300 ease-in-out hover:translate-x-2"
                  href={route}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="border-lambda/30 flex gap-5 border-t px-6 pt-4 md:px-10">
          {social?.map(({ _id, label, icon, route }) => {
            return (
              <li key={_id}>
                <Link
                  className="text-lambda/60 hover:text-primary text-[22px] transition-all duration-300 ease-in-out"
                  href={route}
                >
                  <Icon className={icon} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Image
        className="absolute right-0 bottom-0"
        src="/icons/m.svg"
        alt="icon"
        width={246}
        height={272}
      />
      <CloseModal />
    </div>
  );
};

export default MenuModal;

const data = [
  {
    _id: 1,
    label: "About MCube",
    route: "/about",
  },
  {
    _id: 2,
    label: "What We Do",
    route: "/what-we-do",
    subMenu: [
      {
        _id: 1,
        label: "Lenders / Financial Institutions",
        description: "Expert guidance for lenders and financial institutions.",
        icon: "fi-rr-handshake",
        route: "/leaders-financial-institutions",
      },
      {
        _id: 2,
        label: "Investors",
        description: "Strategic insights enabling investors to make informed.",
        icon: "fi-rr-building",
        route: "/investors",
      },
      {
        _id: 3,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed.",
        icon: "fi-rr-building",
        route: "/investors",
      },
      {
        _id: 4,
        label: "Investors",
        description: "Strategic insights enabling investors to make informed.",
        icon: "fi-rr-building",
        route: "/investors",
      },
      {
        _id: 5,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed.",
        icon: "fi-rr-building",
        route: "/investors",
      },
    ],
  },
  {
    _id: 3,
    label: "Insights",
    route: "/insights",
  },
  {
    _id: 4,
    label: "Media",
    route: "/media",
  },
  {
    _id: 5,
    label: "Careers",
    route: "/careers",
  },
  {
    _id: 6,
    label: "Contact Us",
    route: "/contact",
  },
];

const social = [
  {
    _id: 1,
    label: "LinkedIn",
    icon: "fi-brands-linkedin",
    route: "/linkedin",
  },
  {
    _id: 2,
    label: "Twitter",
    icon: "fi-brands-twitter",
    route: "/twitter",
  },
  {
    _id: 3,
    label: "Facebook",
    icon: "fi-brands-facebook",
    route: "/facebook",
  },
];
