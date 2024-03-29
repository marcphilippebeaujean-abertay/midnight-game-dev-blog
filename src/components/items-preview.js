import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Date from "./date";
import CommentCount from "./comment-count"
import { Calendar, Comment, Tag } from "./icons";
import CategoryDisplay from "./category-display";
import NewContentIndicator from "./new-content-indicator";
import "../style/list-items.less";

class ItemPreview extends React.Component {
    componentDidMount() {
        this.color = window
            .getComputedStyle(this.textSecondary, null)
            .getPropertyValue("color");
        const calendar = this.textSecondary.querySelector("path");
        calendar.setAttribute("fill", this.color);
    }

    render() {
        let itemStyle = this.props.itemDimensionClassNames === undefined ?
            "item col s12 m6 l4" : "item col " + this.props.itemDimensionClassNames;
        return (
            <div className={itemStyle}>
                <div className="box">
                    <div className="image">
                        <NewContentIndicator postDate={this.props.data.node.frontmatter.date} />
                        <Img
                            fluid={
                                this.props.data.node.frontmatter.image
                                    .childImageSharp.fluid
                            }
                        />
                        <Link
                            to={this.props.data.node.fields.slug}
                            title={this.props.data.node.frontmatter.title}
                            aria-label={this.props.data.node.frontmatter.title}
                            className="overlay-link"
                            style={{ opacity: 0 }}
                        >
                            {this.props.data.node.frontmatter.title}
                        </Link>
                    </div>
                    <div className="content">
                        <h3 className="text-primary">
                            <Link
                                to={this.props.data.node.fields.slug}
                                title={this.props.data.node.frontmatter.title}
                            >
                                {this.props.data.node.frontmatter.title}
                            </Link>
                        </h3>
                        {/*<p className="text-tertiary">
                            {this.props.data.node.frontmatter.description}
                        </p>*/}
                        <p></p>
                        <p
                            className="date text-secondary"
                            ref={c => (this.textSecondary = c)}
                        >
                            <span className="icon">
                                <Calendar />
                            </span>
                            <Date
                                data={this.props.data.node.frontmatter.date}
                            />
                        </p>
                        <p className="text-secondary">
                            <span className="icon">
                                <Comment />
                            </span>{" "}
                            <span>
                                <CommentCount location={this.props.data.node.fields.slug} title={this.props.data.node.frontmatter.title} />
                            </span>
                        </p>
                        {
                            this.props.data.node.frontmatter.category != null && (
                                <p className="text-secondary tags-container">
                                    <span className="icon">
                                        <Tag />
                                    </span>
                                    <CategoryDisplay categories={this.props.data.node.frontmatter.category} type={"blog"} />
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default function (props) {
    const data = props.data.allMdx.edges;

    let items = [];
    data.forEach(function (e, i) {
        if (props.remove && e.node.id === props.remove) return;
        items.push(<ItemPreview key={e.node.id} data={e} itemDimensionClassNames={props.itemDimensionClassNames} />);
    });
    return <div className="items-preview-list"><div className="row">{items}</div></div>
}
