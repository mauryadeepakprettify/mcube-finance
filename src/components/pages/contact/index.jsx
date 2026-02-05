import Hero from "@/components/organisms/Hero";
import Map from "./Map";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <Hero
        img="man"
        title="Contact Us"
        description="Strategic consulting helping brokers strengthen deals and accelerate closings."
      />
      <Form />
      <Map />
    </>
  );
};

export default Contact;
