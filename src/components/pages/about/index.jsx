import Hero from "@/components/organisms/Hero"
import Vision from "./Vision"
import WhoWeAre from "./WhoWeAre"
import OurPhilosphy from "./OurPhilosphy"
import OurServices from "./OurServices"
import OurTeam from "./OurTeam"
import DataSecurity from "./DataSecurity"
import MCubeAdvantage from "./MCubeAdvantage"

const About = () => {
  return (
    <>
      <Hero vid="clouds" title="About Us" description="MCube delivers trusted global real estate expertise with precision, speed, and uncompromising security." />
      <WhoWeAre />
      <Vision />
      <OurPhilosphy />
      <OurServices />
      <OurTeam />
      <MCubeAdvantage />
      <DataSecurity />
    </>
  )
}

export default About