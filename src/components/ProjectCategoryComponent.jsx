import React from 'react';

export const ProjectCategoryComponent = (props) => {
    return (
        <li data-filter={props.val}>
            <a href="#" id={props.val}>
                {props.val}
            </a>
        </li>
    )
}