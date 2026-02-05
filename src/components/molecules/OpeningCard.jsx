import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const OpeningCard = ({ data }) => {
  const { _id, opening, location, type, details } = data;
  return (
    <div className="border-t border-[#EFEFEF] py-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base leading-[24px] mb-2">
            {location} | {type}
          </p>
          <h3 className="text-[20px] leading-[24px] mb-1">{opening}</h3>
          <p className="text-lambda text-base leading-[24px]">{type}</p>
        </div>
        <Button>Apply Now</Button>
      </div>
    </div>
  );
};

export default OpeningCard;
