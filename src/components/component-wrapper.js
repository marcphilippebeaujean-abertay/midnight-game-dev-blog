import React from "react";
import "../style/component-wrapper.less";

export default ({ children }) => (
    <div className="component-outter">
        <div className="component-wrapper">
            {children}
        </div>
    </div>
)