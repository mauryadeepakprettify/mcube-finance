import React from "react";

const Article = ({ content, features }) => {
  return (
    <section className="py-5 lg:pt-10 lg:pb-16">
      <div className="container">
        <div className="mb-10">
          <p className="text-lambda mx-auto max-w-[699px] text-center leading-[24px]">
            {content}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-14 gap-y-8">
          {features?.map(({ _id, name, description }, idx) => {
            return (
              <div className="flex gap-8 border-t border-[#00000021] pt-7" key={_id}>
                <div>
                  <span className="text-black leading-5 text-[36px] ">{`${idx > 9 ? idx + 1 : `0${idx + 1}`}`}</span>
                </div>
                <div>
                  <h3 className="text-black text-xl leading-[26px] mb-3">{name}</h3>
                  <p className="text-lambda leading-[24px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Article;
