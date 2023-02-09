import { Link } from "gatsby"
import React from "react"
import '../css/css.css'

export default function Header({ children, n_class, childClass }) {
    return (
            <div className="header">
                <Link to='/blog/'>Blog</Link>
                <Link to="/" className="title">SiteName</Link> 
                <Link to="/news/">News</Link>
            </div>
    )
}