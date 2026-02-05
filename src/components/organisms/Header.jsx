"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { useModal } from "@/hooks/useModal";

const Header = () => {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-30 bg-white shadow">
      <div className="px-2 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-2">
          <Link href="/">
            <Image
              className="w-[140px] lg:w-[196px]"
              src="/logo.svg"
              alt="Logo"
              width={196}
              height={60}
            />
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Button onClick={() => openModal("enquire")}>Enquire Now</Button>
          </div>

          <button
            onClick={() => openModal("menu")}
            className="cursor-pointer lg:hidden"
          >
            <Icon className="text-lambda fi-rr-bars-staggered text-2xl" />
          </button>
        </div>
        <div className="hidden items-center justify-between lg:flex">
          <ul className="flex items-center gap-[43px]">
            {data.map(({ _id, label, route, subMenu }) => {
              return (
                <li
                  className="group before:bg-primary relative before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[3px] before:w-0 before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:before:w-full"
                  key={_id}
                >
                  <Link
                    className="text-lambda flex h-full items-center gap-2 pb-[9px]"
                    href={route}
                  >
                    {label}{" "}
                    {subMenu && (
                      <i className="fi fi-rr-angle-small-down leading-0 transition-all duration-300 ease-in-out group-hover:rotate-180" />
                    )}
                  </Link>
                  {subMenu && (
                    <ul className="border-lambda/30 absolute top-full left-0 grid w-[900px] origin-top transform-[perspective(2000px)_translate3d(0,0,50px)_rotateX(-90deg)_scale3d(0.86,0.75,1)_translateY(0px)] grid-cols-3 gap-4 rounded-b-lg border-t bg-white p-3 shadow-lg transition-all duration-500 ease-in-out group-hover:transform-[perspective(2000px)_translate3d(0,0,0)_rotateX(0deg)_scale3d(1,1,1)_translateY(0px)]">
                      {subMenu.map(
                        ({ _id, label, description, icon, route }) => {
                          return (
                            <li
                              className="hover:bg-beta rounded-sm p-5 transition-all duration-300 ease-in-out"
                              key={_id}
                            >
                              <Link
                                href={`/what-we-do${route}`}
                                className="flex gap-4"
                              >
                                <Icon
                                  className={`${icon} text-primary text-2xl transition-all duration-300 ease-in-out`}
                                />
                                <div>
                                  <p className="mb-1 text-[18px] leading-[22px] transition-all duration-300 ease-in-out">
                                    {label}
                                  </p>
                                  <p className="text-lambda text-sm leading-[16px] transition-all duration-300 ease-in-out">
                                    {description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="text-lambda flex cursor-pointer items-center gap-3 pb-[9px]">
            <Icon className="fi-rr-world" /> Worldwide{" "}
            <Icon className="fi-rr-angle-small-down" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
    _id: 4,
    label: "Media",
    route: "/media",
  },
  {
    _id: 5,
    label: "Careers",
    route: "/careers",
  },
];
