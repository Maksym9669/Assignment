import React from "react";
import { Link } from "react-router-dom";

export default function Td({ children, style, to }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : "div";

  return (
    <td>
      <ContentTag to={to} style={{ textDecoration: "none", color: "black" }}>
        {children}
      </ContentTag>
    </td>
  );
}
