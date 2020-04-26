import React from "react";

export default ({ widgetSrc }) => (
    <div className="iframe-wrapper" style={{
        position: "relative", display: "block", margin: "0 auto", maxWidth: "500px", width: "100%"
    }}>
        <iframe id="ViostreamIframe"
            width="100%" height="100%"
            src={widgetSrc}
            frameborder="0" allowfullscreen=""
            style={{ position: "absolute", top: "0", left: "0" }}></iframe>
    </div>
)