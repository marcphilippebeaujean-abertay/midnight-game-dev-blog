import React, { useEffect } from "react";
import NewsletterForm from "./newsletter";

const showPopupWrapper = "newsletter-popup-wrapper";
const showPopupToggleClass = "show-popup";
const cookieKeyPopupHidden = "popup-hidden";

export default () => {
    useEffect(() => {
        if (localStorage.getItem(cookieKeyPopupHidden) === null) {
            setTimeout(() => {
                document.getElementById(showPopupWrapper).classList.add(showPopupToggleClass);
            }, 120000);
        }
    }, []);

    return (
        <div id={showPopupWrapper}>
            <div id="popup-close-btn" className="btn" onClick={() => {
                localStorage.setItem(cookieKeyPopupHidden, "true");
                document.getElementById(showPopupWrapper).classList.remove(showPopupToggleClass);
            }
            }>
                X
            </div>
            <div id="newsletter-popup">
                <NewsletterForm isPopup={true} />
            </div>
        </div>)
}