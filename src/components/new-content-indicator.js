import React from "react";


export default ({ postDate }) => {
    const currentDate = new Date();
    const oneWeekAgo = currentDate.getTime() - (7 * 24 * 3600000);
    const isNew = Date.parse(postDate) > oneWeekAgo;
    return isNew ? <span className="new-content-indicator">NEW!</span> : null;
}