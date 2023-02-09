import React from "react"
import { Link } from "gatsby";

export default function NewsTemp({ children, node}) {
    return (
        <article key={node.id} className='news'>
            <h2>{node.frontmatter.title}</h2>
            <p className="author">{node.frontmatter.author}</p>
            <p className="description">{node.excerpt} </p>
            <Link className='button_link' to={node.frontmatter.slug}> More..</Link>
           </article>
    )
}