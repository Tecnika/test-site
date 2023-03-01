import React from "react"
import { Link } from "gatsby";

export default function PostTemp({ children, node}) {
    return (
        <article key={node.node.id} className='post'>
            <h2>{node.node.frontmatter.header}</h2>
            <p className="author">{node.node.frontmatter.author}</p>
            <p className="description">{node.node.excerpt} </p>
            <Link className='button_link' to={node.node.frontmatter.slug}> More..</Link>
           </article>
    )
}