import React from 'react';
const PageHeader = (props) => (
    <header className="page-header">
        <h2>
            {props.titulo}&nbsp;
            <small>{props.subtitulo}</small>
        </h2>
    </header>
);
export default PageHeader;