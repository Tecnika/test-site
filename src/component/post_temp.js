import React from "react"
import { Link } from "gatsby";

export default function PostTemp({ children, node}) {
    return (
        <article key={node.id} className='post'>
            <h2>{node.frontmatter.header}</h2>
            <p className="author">{node.frontmatter.author}</p>
            <p className="description">{node.excerpt} </p>
            <Link className='button_link' to={node.frontmatter.slug}> More..</Link>
           </article>
    )
}