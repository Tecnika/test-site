import React from "react"
import Header from "./header"

export default function Layout({ children, n_class, childClass }) {
    return (
        <main>
            <Header></Header>
            <div className="content">{children}</div>
        </main>
    )
}