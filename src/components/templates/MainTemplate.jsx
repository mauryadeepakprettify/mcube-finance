import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainTemplate