import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" description="Error! Something went wrong." />
        <section id="404" className="container" style={{ minHeight: "600px" }}>
            <div className="section-title">
                <h1>404</h1>
                <p class="text-primary">
                    The page you are looking for doesn't exist, or has been
                    removed.
                </p>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
