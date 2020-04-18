import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { cookieBanner } from "../constants/storageKeys";
import "../style/cookie-banner.less";

export default () => {
    const [cookiesAccepted, setCookieAccepted] = useState(false);

    useEffect(() => {
        if (localStorage.getItem(cookieBanner) === "true") {
            setCookieAccepted(true);
        }
    })

    return cookiesAccepted ? null : (
        <div id="cookie-banner">
            <div className="container">
                <div class="row">
                    <div class="col">
                        <p id="cookies-text">
                            This site uses cookies for analytics and to improve
                            the user experience. By using this site, you are
                            agreeing to their use. Please read the{" "}
                            <Link to={"/data-policy"}>data policy</Link> for
                            more information.
                        </p>
                    </div>
                    <div class="col-md">
                        <button
                            class="btn"
                            onClick={() => {
                                setCookieAccepted(true);
                                localStorage.setItem(cookieBanner, "true");
                            }}
                        >
                            Got It!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
