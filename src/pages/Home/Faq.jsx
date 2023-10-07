import { useState } from "react";

const Faq = ({ faqItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div>
      {faqItems.map((faqItem, index) => (
        <div key={index} className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
              onClick={() => toggleItem(index)}
            >
              <span>{faqItem.question}</span>
              <i
                className={`fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform ${
                  activeItem === index ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </h6>
          <div
            className={`${
              activeItem === index ? "h-auto" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              {faqItem.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
