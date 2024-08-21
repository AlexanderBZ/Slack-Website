import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

export default function Link({ href, external, children }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return <NextLink href={href}>{children}</NextLink>;
}

Link.propTypes = {
    href: PropTypes.string,
    external: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any
  };