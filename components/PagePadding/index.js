import classNames from "classnames";
import React from "react";

export default function PagePadding({ children, className = "" }) {
  const cn = classNames({
    ["px-4 max-w-7xl w-full mx-auto"]: true,
    [className]: true,
  });
  return <div className={cn}>{children}</div>;
}
