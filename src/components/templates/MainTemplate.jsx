import Overlay from "../atoms/Overlay";
import EnquireModal from "../molecules/EnquireModal";
import MenuModal from "../molecules/MenuModal";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Overlay />
      <MenuModal />
      <EnquireModal />
      <Footer />
    </>
  );
};

export default MainTemplate;
