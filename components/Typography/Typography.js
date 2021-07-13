import React from "react";

const Typography = ({ variant, children, className = "" }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`${className} text-h1m md:text-h1 font-bold uppercase`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${className} text-h2 font-bold uppercase`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${className} text-h3 font-bold uppercase`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`${className} text-h4 font-bold uppercase`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`${className} text-h5 font-bold uppercase`}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`${className} text-h6 font-bold uppercase`}>
          {children}
        </h6>
      );
    case "overline":
      return (
        <p className={`${className} text-overline uppercase `}>{children}</p>
      );
    case "subtitle":
      return (
        <p
          className={`${className} text-subtitle text-primary font-bold uppercase`}
        >
          {children}
        </p>
      );
    default:
      return <p className={`${className} text-body font-medium`}>{children}</p>;
  }
};

export default Typography;
