import React from "react";

export const ProjectCategoryComponent = (props) => {
  return (
    <li data-filter={props.val}>
      <a href="javascript:void(0);" id={props.val}>
        {props.val}
      </a>
    </li>
  );
};

