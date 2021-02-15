import React from 'react';
import If from "./If";
export default (props) => (
    <If test={!props.show}>
        <button className={"btn btn-" + (props.style || "default")} onClick={props.onClick}>
            <i className={"fa fa-" + (props.icon || "check")}></i>
        </button>
    </If>
)