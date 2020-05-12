import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

export default function () {
    return (
        <Layout>
            <SEO lang="en" title="Contact" description="Contact the currators of Moonlight Game Devs" />
            <section>
                <div className="section-title">
                    <h1>CONTACT</h1>
                </div>
                <div style={{ minHeight: "600px" }}>
                    <Contact />
                </div>
            </section>
        </Layout>
    );
}
