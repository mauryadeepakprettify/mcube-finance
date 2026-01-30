import "./globals.css";
import localFont from "next/font/local";

const celeste = localFont({
  src: "../../public/fonts/CelesteOT.otf",
  variable: "--font-celeste",
});

const partner = localFont({
  src: "../../public/fonts/PartnerScript.ttf",
  variable: "--font-partner",
});

export const metadata = {
  title: "Mcube Financial",
  description:
    "Your financial advisor stands by your side, providing trusted guidance tailored to your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${celeste.variable} ${partner.variable}`}>
        {children}
      </body>
    </html>
  );
}
