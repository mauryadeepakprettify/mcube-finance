import Hero from "@/components/organisms/Hero";
import MediaList from "./mediaList";

const Media = () => {
  return (
    <>
      <Hero
        img="media"
        title="Media"
        description="Latest updates, expert insights, and important announcements from MCube."
      />
      <MediaList />
    </>
  );
};

export default Media;
