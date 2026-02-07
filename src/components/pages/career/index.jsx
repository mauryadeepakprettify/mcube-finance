import Hero from "@/components/organisms/Hero";
import Info from "./Info";
import Openings from "./Openings";
import TeamMembers from "./TeamMembers";

const Career = () => {
  return (
    <>
      <Hero
        img="career"
        title="Career"
        description="Be part of a collaborative environment that values learning and impact."
      />
      <Info />
      <TeamMembers />
      <Openings />
    </>
  );
};

export default Career;
