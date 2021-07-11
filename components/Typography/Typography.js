import React from "react";

const Typography = ({ variant, children }) => {
  switch (variant) {
    case "h1":
      return <h1 className="text-h1 font-bold uppercase">{children}</h1>;
    case "h2":
      return <h2 className="text-h2 font-bold uppercase">{children}</h2>;
    case "h3":
      return <h3 className="text-h3 font-bold uppercase">{children}</h3>;
    case "h4":
      return <h4 className="text-h4 font-bold uppercase">{children}</h4>;
    case "h5":
      return <h5 className="text-h5 font-bold uppercase">{children}</h5>;
    case "h6":
      return <h6 className="text-h6 font-bold uppercase">{children}</h6>;
    case "overline":
      return (
        <p className="text-overline text-primary font-bold uppercase">
          {children}
        </p>
      );
    case "subtitle":
      return (
        <p className="text-subtitle text-primary font-bold uppercase">
          {children}
        </p>
      );
  }
};

export default Typography;
