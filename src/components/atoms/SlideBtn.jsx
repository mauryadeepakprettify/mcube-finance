import Icon from "./Icon";

const SlideBtn = ({ className, icon, offset, mobileVisible = false }) => {
  return (
    <div
      className={`${mobileVisible ? "flex!" : "hidden! lg:flex!"} ${className} mt-0!`}
      style={className.includes("prev") ? { left: offset } : { right: offset }}
    >
      <Icon
        className={`${icon ? icon : "fi-rr-angle-right"} ${className.includes("prev") ? "rotate-180" : ""} text-lambda`}
      />
    </div>
  );
};

export default SlideBtn;
