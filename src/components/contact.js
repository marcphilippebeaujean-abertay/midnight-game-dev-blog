import React from "react";
import SectionTitle from "./sectiontitle";
import { StaticQuery, graphql, Link } from "gatsby";
import { PaperPlane, Loading } from "./icons";
import { emailRegex, isValidFormInput, encodeFormData } from "../constants/formUtils";
import SocialLinks from "./sociallinks";
import "../style/contact.less";

const minimumMessageLength = 10;

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitDisabled: false
        };

        this.textAreaInput = this.textAreaInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.showContactForm = true;

        if (this.props.contact.api_url === "") {
            this.showContactForm = false;
        }
    }

    textAreaInput(event) {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.submitDisabled) {
            let formInputValidated = true;
            if (
                !isValidFormInput(
                    this.dataEmail.name,
                    emailRegex.test(this.dataEmail.value)
                )
            ) {
                formInputValidated = false;
            }
            if (
                !isValidFormInput(
                    this.dataMessage.name,
                    this.dataMessage.value.length >= minimumMessageLength
                )
            ) {
                formInputValidated = false;
            }
            if (
                !isValidFormInput(
                    this.dataName.name,
                    this.dataName.value.length > 0
                )
            ) {
                formInputValidated = false;
            }
            if (
                !isValidFormInput(
                    this.policyCheckbox.name,
                    this.policyCheckbox.checked
                )
            ) {
                formInputValidated = false;
            }
            if (!formInputValidated) return;

            this.setState({
                submitDisabled: true
            });

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodeFormData({
                    "form-name": this.form.getAttribute("name"),
                    [this.dataEmail.name]: this.dataEmail.value,
                    [this.dataName.name]: this.dataName.value,
                    [this.dataMessage.name]: this.dataMessage.value
                })
            })
                .then(function (res) {
                    return res.json();
                })
                .then(
                    result => {
                        this.resMessage.style.opacity = 1;
                        if (result.response === "error") {
                            this.resMessage.innerHTML =
                                "There was an error in sending the message";
                            this.resMessage.classList.add("opacity-0");
                            this.resMessage.classList.add("color-error");
                        } else {
                            this.resMessage.innerHTML =
                                "Message sent succesfully";
                            this.resMessage.classList.remove("opacity-0");
                            this.resMessage.classList.remove("color-error");
                        }
                        this.dataName.value = "";
                        this.dataEmail.value = "";
                        this.dataMessage.value = "";
                        this.policyCheckbox.checked = false;
                        this.setState({
                            submitDisabled: false
                        });
                    },
                    error => {
                        this.resMessage.innerHTML = "Message sent succesfully";
                        this.resMessage.classList.remove("color-error");
                        this.resMessage.classList.remove("opacity-0");
                        this.dataName.value = "";
                        this.dataEmail.value = "";
                        this.dataMessage.value = "";
                        this.policyCheckbox.checked = false;
                        this.setState({
                            submitDisabled: false
                        });
                    }
                );
        }
    }

    componentDidMount() {
        if (this.showContactForm) {
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
        const formName = "contact";
        const formInputName = "name-" + formName;
        const formInputEmail = "email-" + formName;
        const formInputMessage = "message-" + formName;
        const dataPolicyFieldName = "data-policy-" + formName;
        return (
            <section id="contact" className="container">
                <div className="section-title">
                    <SectionTitle title="CONTACT" />
                </div>
                <div
                    className={"row" + (this.showContactForm ? "" : " no-form")}
                    ref={c => (this.contactArea = c)}
                >
                    {this.showContactForm && (
                        <div className="col s12 m6">
                            <form method="post" name={formName} data-netlify="true" data-netlify-honeypot="bot-field" ref={c => (this.form = c)}
                            >
                                {/*Netlify required field */}
                                <input type="hidden" name="form-name" value={formName} />
                                <div className="field">
                                    <label>
                                        <span className="label text-tertiary">
                                            Name
                                        </span>
                                        <div className="input-border">
                                            <input
                                                type="text"
                                                ref={c => (this.dataName = c)}
                                                className="field-box"
                                                name={formInputName}
                                                id={formInputName}
                                                required
                                            />
                                        </div>
                                        <p
                                            class="color-error d-none"
                                            id={formInputName + "-error"}
                                        >
                                            Please enter a name
                                        </p>
                                    </label>
                                </div>
                                <div className="field">
                                    <label>
                                        <span className="label text-tertiary">
                                            Email
                                        </span>
                                        <div className="input-border">
                                            <input
                                                type="email"
                                                ref={c => (this.dataEmail = c)}
                                                className="field-box"
                                                name={formInputEmail}
                                                id={formInputEmail}
                                                required
                                            />
                                        </div>
                                        <p
                                            class="color-error d-none"
                                            id={formInputEmail + "-error"}
                                        >
                                            Please enter a valid email
                                        </p>
                                    </label>
                                </div>
                                <div className="field">
                                    <label>
                                        <span className="label text-tertiary">
                                            Message
                                        </span>
                                        <div className="input-border">
                                            <textarea
                                                style={{ overflowY: "hidden" }}
                                                ref={c =>
                                                    (this.dataMessage = c)
                                                }
                                                className="field-box"
                                                onChange={this.textAreaInput}
                                                name={formInputMessage}
                                                id={formInputMessage}
                                                required
                                            />
                                        </div>
                                        <p
                                            class="color-error d-none"
                                            id={formInputMessage + "-error"}
                                        >
                                            Please enter a longer message
                                        </p>
                                    </label>
                                </div>
                                <div className="field">
                                    <label>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name={dataPolicyFieldName}
                                                id={dataPolicyFieldName}
                                                ref={c =>
                                                    (this.policyCheckbox = c)
                                                }
                                            />
                                            <span>
                                                &nbsp;I have read and agree to
                                                the{" "}
                                                <Link to={"/privacy-policy"}>
                                                    data policy
                                                </Link>
                                                .
                                            </span>
                                        </div>
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
                                            onClick={this.handleSubmit}
                                            id="submit"
                                            ref={c => (this.btn = c)}
                                        >
                                            SEND{" "}
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
                                    <label>
                                        <p
                                            className="res-message opacity-0"
                                            ref={c => (this.resMessage = c)}
                                        ></p>
                                    </label>
                                </div>
                            </form>
                        </div>
                    )}
                    <div
                        className={
                            this.showContactForm
                                ? "col s12 m6 details"
                                : "col s12 details"
                        }
                    >
                        {this.props.contact.description && (
                            <p className="text-tertiary">
                                {this.props.contact.description}
                            </p>
                        )}
                        <ul>
                            <li className="social-margin">
                                <SocialLinks />
                            </li>
                        </ul>
                    </div>
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
                        contact {
                            api_url
                            description
                        }
                    }
                }
            }
        `}
        render={data => <Contact contact={data.site.siteMetadata.contact} />}
    />
);
