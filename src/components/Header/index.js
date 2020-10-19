import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "./../Shared/globalCyber.css"
import "./../Shared/headerCyber.css"
import headerLogoCyber from "./../../../static/cyber/cyberLogoNarrow.png"

export default function HeaderCyber() {
  return (
    <>
      <Helmet>
        <title>CyberKidz</title>
        <meta content="text/html; charset=utf-8" httpequiv="Content-Type" />
        <meta name="theme-color" content="#153354" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </Helmet>
      <nav>
        <a href="/cyber/">
          <img className="navHeroImg" src={headerLogoCyber} alt="Hero Image." />
        </a>
      </nav>
    </>
  )
}
