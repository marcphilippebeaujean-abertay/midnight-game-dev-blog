import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { PaperPlane, Loading } from "./icons";
import { emailRegex, isValidFormInput, encodeFormData } from "../constants/formUtils";
import "../style/newsletter.less";

class Newsletter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitDisabled: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.showNewsletter = true;

        if (this.props.apiUrl === "") {
            this.showNewsletter = false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.submitDisabled) {
            let failedValidation = false;
            if (
                !isValidFormInput(
                    this.policyCheckbox.name,
                    this.policyCheckbox.checked
                )
            ) {
                failedValidation = true;
            }
            if (
                !isValidFormInput(
                    this.dataEmail.name,
                    emailRegex.test(this.dataEmail.value)
                )
            ) {
                failedValidation = true;
            }
            if (failedValidation) {
                return;
            }

            this.setState({
                submitDisabled: true
            });

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodeFormData({
                    "form-name": this.form.getAttribute("name"),
                    [this.dataEmail.name]: this.dataEmail.value
                })
            })
                .then(function (res) {
                    return res.json();
                })
                .then(
                    result => {
                        this.resMessage.classList.remove("opacity-0")
                        if (result.response === "error") {
                            this.resMessage.innerHTML =
                                "There was an error while trying to subscribe.";
                            this.resMessage.classList.add("opacity-0");
                            this.resMessage.classList.add("color-error");

                        } else {
                            this.resMessage.innerHTML =
                                "Thanks for subscribing!";
                            this.resMessage.classList.remove("opacity-0");
                            this.resMessage.classList.remove("color-error");
                        }
                        this.dataEmail.value = "";
                        this.policyCheckbox.checked = false;
                    },
                    error => {
                        this.resMessage.innerHTML = "Thanks for subscribing!";
                        this.resMessage.classList.remove("opacity-0");
                        this.dataEmail.value = "";
                        this.policyCheckbox.checked = false;
                    }
                )
                .finally(e => this.setState({
                    submitDisabled: false
                }))
        }
    }

    componentDidMount() {
        if (this.showNewsletter) {
            let color = window
                .getComputedStyle(this.btn, null)
                .getPropertyValue("color");
            this.btn.querySelector("path").setAttribute("fill", color);
        }

        let li = this.contactArea.querySelectorAll(".item");

        li.forEach(function (e, i) {
            let p = e.querySelector("path");
            if (p)
                p.setAttribute(
                    "fill",
                    window.getComputedStyle(e, null).getPropertyValue("color")
                );
        });
    }

    render() {
        const formName = "newsletter-subscription";
        const emailFieldName = "email-" + formName;
        const dataPolicyFieldName = "dataPolicy-" + formName;
        return (
            <section id="newsletter" className="container">
                <div className={"row"} ref={c => (this.contactArea = c)}>
                    <h3>Newsletter</h3>
                    <p>Subscribe to <a href="https://byteschool.io/" target="_blank" rel="noopener noreferrer">ByteSchool</a> for weekly updates on Blog Posts and Podcast Episodes.</p>
                    {this.showNewsletter && (
                        <form method="post" name={formName} data-netlify="true" data-netlify-honeypot="bot-field" ref={c => (this.form = c)}
                        >
                            {/*Netlify required field */}
                            <input type="hidden" name="form-name" value={formName} />
                            <div className="field">
                                <label>
                                    <div className="input-border">
                                        <input
                                            type="email"
                                            ref={c => (this.dataEmail = c)}
                                            className="field-box"
                                            name={emailFieldName}
                                            id={emailFieldName}
                                            placeholder="Your email..."
                                            required
                                        />
                                    </div>
                                    <p
                                        className="d-none color-error"
                                        id={emailFieldName + "-error"}
                                    >
                                        Please enter a valid email
                                    </p>
                                </label>
                            </div>

                            <div className="field">
                                <label>
                                    <input
                                        type="checkbox"
                                        name={dataPolicyFieldName}
                                        id={dataPolicyFieldName}
                                        ref={c => (this.policyCheckbox = c)}
                                    />
                                    <span>
                                        &nbsp;I have read and agree to the{" "}
                                        <Link to={"/privacy-policy"}>
                                            data policy
                                        </Link>
                                        .
                                    </span>
                                    <p
                                        className="d-none color-error"
                                        id={dataPolicyFieldName + "-error"}
                                    >
                                        Please agree to the data policy
                                    </p>
                                </label>
                            </div>

                            <div className="field">
                                <label className="ib">
                                    <button
                                        className={
                                            "btn" +
                                            (this.state.submitDisabled
                                                ? " disabled"
                                                : "")
                                        }
                                        id="submit"
                                        ref={c => (this.btn = c)}
                                        onClick={this.handleSubmit}
                                    >
                                        SUBSCRIBE
                                        <span
                                            className="icon paper-plane"
                                            style={{
                                                display: this.state
                                                    .submitDisabled
                                                    ? "none"
                                                    : "inline-block"
                                            }}
                                        >
                                            <PaperPlane />
                                        </span>
                                        <span
                                            className="icon loading"
                                            style={{
                                                display: !this.state
                                                    .submitDisabled
                                                    ? "none"
                                                    : "inline-block"
                                            }}
                                        >
                                            <Loading />
                                        </span>
                                    </button>
                                </label>
                            </div>
                            <label>
                                <p
                                    className="res-message opacity-0"
                                    ref={c => (this.resMessage = c)}
                                ></p>
                            </label>
                        </form>
                    )}
                </div>
            </section>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        newsletter {
                            api_url
                        }
                    }
                }
            }
        `}
        render={data => (
            <Newsletter apiUrl={data.site.siteMetadata.newsletter.api_url} />
        )}
    />
);
