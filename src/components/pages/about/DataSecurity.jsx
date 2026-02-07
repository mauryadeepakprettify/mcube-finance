import Image from "next/image";

const DataSecurity = () => {
  return (
    <section className="relative py-8 lg:py-16">
      <Image
        src="/vector/dot_b.svg"
        alt="data-security"
        width={258}
        height={97}
        className="absolute hidden md:block right-0 bottom-0"
      />
      <div className="container grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
        <figure className="">
          <video
            className="h-[345px] w-full object-cover"
            src="/video/security.mp4"
            poster="/video/security.svg"
            autoPlay
            loop
            muted
          />
        </figure>
        <div className="flex flex-col justify-center">
          <h2 className="mb-3 md:mb-5 text-center text-[32px] leading-[36px] max-[375px]:text-[28px] max-[375px]:leading-[32px] md:text-left lg:text-5xl lg:leading-[55px]">Data Security</h2>
          <p className="text-lambda md:text-left text-center leading-[24px]">
            At MCube, we respect the confidentiality of our clients’ information
            and protect it seriously. MCube has a comprehensive security policy
            that covers "people, policy, and process" to ensure confidentiality
            and protection of data. We cover security across the spectrum, from
            physical security of premises and hardware to logical security
            across our systems and software, to ongoing training of our staff on
            dynamic aspects of information security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;
