import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";
import NewsletterPopup from "./newsletter-popup";
import AdSense from "./monetization/adsense";
import { MDXProvider } from "@mdx-js/react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import "../style/monetization.less"

deckDeckGoHighlightElement();

const Layout = ({ placeholder, children }) => {
    return (
        <MDXProvider style={{ position: "relative" }}>
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <NewsletterPopup />
            <div className="wrapper">{children}</div>
            <Footer />
        </MDXProvider>
    );
};

export default Layout;
