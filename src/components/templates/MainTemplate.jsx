import Overlay from "../atoms/Overlay";
import EnquireModal from "../molecules/EnquireModal";
import MenuModal from "../molecules/MenuModal";
import VideoModal from "../molecules/VideoModal";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Overlay />
      <MenuModal />
      <EnquireModal />
      <VideoModal />
    </>
  );
};

export default MainTemplate;
