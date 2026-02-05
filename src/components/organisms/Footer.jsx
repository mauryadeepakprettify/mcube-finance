"use client"
import Image from "next/image"
import Link from "next/link"
import Icon from "../atoms/Icon"
import Button from "../atoms/Button"
import { useModal } from "@/hooks/useModal"

const Footer = () => {

  const { openModal } = useModal()

  return (
    <footer className="border-t border-[#7F7E7E40]">
      <div className="py-2 border-b border-[#7F7E7E40]">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image className=" lg:w-[196px] w-[140px] " src="/logo.svg" alt="Logo" width={196} height={60} />
          </Link>

          <div className="flex items-center gap-10">
            <ul className="hidden lg:flex items-center gap-4">
              {socialLinks?.map(({ _id, icon, route }) => {
                return (
                  <li key={_id}>
                    <Link href={route}>
                      <Icon className={`${icon} text-lambda hover:text-primary transition-all duration-300 ease-in-out text-2xl`} />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Button onClick={() => openModal("enquire")}>Enquire Now</Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-wrap gap-4 lg:gap-16">
          {footerLinks?.map(({ _id, title, links }, idx) => {
            return (
              <div className={`${idx === 1 ? "flex-2" : "flex-2 lg:flex-1"}`} key={_id}>
                <h3 className="text-lg mb-4">{title}</h3>
                <ul >
                  {links?.map(({ _id, label, route }) => {
                    return (
                      <li key={_id} className="mb-1">
                        <Link href={route} className="text-lambda/80  hover:translate-x-1 hover:text-primary transition-all duration-300 ease-in-out">
                          {label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

          <div className="w-full lg:flex-2">
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="">
              {contact?.map(({ _id, icon, label, route }) => {
                return (
                  <li key={_id} className="mb-4 flex font-extralight items-start gap-6">
                    <Icon className={`${icon} text-lambda mt-1 text-xl`} />
                    <Link href={route} className="text-lambda/80 hover:text-primary transition-all duration-300 ease-in-out">{label}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="w-full lg:flex-2">
            <h3 className="text-lg mb-3 flex-1">Memberships</h3>
            <ul className="flex items-center gap-6">
              {members?.map(({ _id, img }) => {
                return (
                  <li key={_id}>
                    <Image className="object-contain w-[50px] lg:w-[60px]" src={`/images/member/${img}`} alt="Logo" width={100} height={100} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>

      <div className="border border-top  border-[#D6D3D3]">
        <p className="text-center text-lambda/70 leading-[24px] lg:py-6 py-4">
          &copy; 2026 MCube Financial. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

const socialLinks = [
  {
    _id: 1,
    icon: "fi-brands-linkedin",
    route: "#"
  }
]

const footerLinks = [
  {
    _id: 1,
    title: "Company",
    links: [
      {
        _id: 1,
        label: "About Us",
        route: "/about"
      },
      {
        _id: 2,
        label: "Contact Us",
        route: "/what-we-do"
      },
      {
        _id: 4,
        label: "Privacy Policy",
        route: "/media"
      },
      {
        _id: 5,
        label: "Terms & Conditions",
        route: "/careers"
      }
    ]
  },
  {
    _id: 2,
    title: "Services",
    links: [
      {
        _id: 1,
        label: "Lenders / Financial Institutions",
        route: "/lenders-financial-institutions"
      },
      {
        _id: 2,
        label: "Investors",
        route: "/investors"
      },
      {
        _id: 3,
        label: "Brokers",
        route: "/brokers"
      },
      {
        _id: 4,
        label: "Borrowers",
        route: "/investors"
      }
    ]
  }
]

const contact = [
  {
    _id: 1,
    icon: "fi fi-rr-marker",
    label: "128 S Tryon Street, Suite #801 Charlotte, NC - 28202",
    route: "#"
  },
  {
    _id: 2,
    icon: "fi fi-rr-envelope",
    label: "contactus@mcubefinancial.com",
    route: "#"
  }
]

const members = [
  {
    _id: 1,
    img: "CREFC.svg"
  },
  {
    _id: 2,
    img: "ICSC.svg"
  },
  {
    _id: 3,
    img: "MBA.svg"
  },
]