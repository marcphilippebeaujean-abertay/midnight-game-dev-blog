import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";
import { MDXProvider } from "@mdx-js/react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const Layout = ({ placeholder, children }) => {
    return (
        <MDXProvider>
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <div className="wrapper">{children}</div>
            <Footer />
        </MDXProvider>
    );
};

export default Layout;
