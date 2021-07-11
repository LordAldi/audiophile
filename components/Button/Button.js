import React from "react";

const Button = ({ variant, children, classname, icon }) => {
  let style = "";
  if (variant === "outline") {
    style =
      "bg-white border-2 border-black hover:bg-black hover:text-white font-bold";
  } else if (variant === "shop") {
    style = "hover:text-primary";
  } else {
    style = "bg-primary hover:bg-primary-hover text-white font-bold";
  }
  return (
    <div
      className={`px-8 py-4 inline-block items-center ${style}  cursor-pointer `}
    >
      <span className="inline-flex items-center">
        {children}
        {icon && (
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3.5"
          >
            <path
              d="M1.32178 1L6.32178 6L1.32178 11"
              stroke="#D87D4A"
              stroke-width="2"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Button;
