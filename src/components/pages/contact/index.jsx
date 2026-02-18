import Hero from "@/components/organisms/Hero";
import Map from "./Map";
import Location from "./Location";
import Form from "@/components/organisms/Form";

const Contact = () => {
  return (
    <>
      <Hero
        vid="man"
        title="Contact Us"
        description="Strategic consulting helping brokers strengthen deals and accelerate closings."
      />
      <Location />
      <Form />
      <Map />
    </>
  );
};

export default Contact;
