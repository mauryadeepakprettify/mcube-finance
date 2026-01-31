import ConnectNow from "./ConnectNow"
import HomeHero from "./HomeHero"
import Intro from "./Intro"
import Solutions from "./Solutions"

const HomePage = () => {
    return (
        <>
            <HomeHero />
            <Intro />
            <Solutions />
            <ConnectNow />
        </>
    )
}

export default HomePage