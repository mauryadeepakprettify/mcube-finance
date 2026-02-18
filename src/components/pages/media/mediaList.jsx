import MediaCard from "@/components/molecules/MediaCard";

const MediaList = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container grid grid-cols-1 gap-8 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <MediaCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default MediaList;

const data = [
  {
    _id: 1,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "office.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
  {
    _id: 2,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "malik.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
  {
    _id: 3,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "landscape.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
  {
    _id: 4,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "office.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
  {
    _id: 5,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "malik.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
  {
    _id: 6,
    title: "MCube Financial LLC press release in Commercial Mortgage Alert",
    img: "landscape.svg",
    date: "12 Jan , 2026",
    doc: "mcubejune2023.pdf",
  },
];
