import React from "react";

const ListItem = ({ children, link, className, liStyle }) => {
  return (
    <li className={liStyle}>
      <a href={link} className={className}>
        {children}
      </a>
    </li>
  );
};

export default ListItem;
