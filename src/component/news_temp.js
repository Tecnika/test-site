import React from "react"
import { Link } from "gatsby";

export default function NewsTemp({ children, node}) {
    return (
        <article key={node.node.id} className='news'>
            <h2>{node.node.frontmatter.title}</h2>
            <p className="author">{node.node.frontmatter.author}</p>
            <p className="description">{node.node.excerpt} </p>
            <Link className='button_link' to={node.node.frontmatter.slug}> More..</Link>
           </article>
    )
}