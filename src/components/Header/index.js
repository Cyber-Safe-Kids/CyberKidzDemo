import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "./../Shared/global.css"
import "./../Shared/header.css"
import HeroImg from "./../../../../0066cc.github.io/static/cyber/cyberlogoNarrow.png"

export default function Header() {
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
        <a href="http://0066cc.com/CyberKidzMVM/">
          <img className="navHeroImg" src={HeroImg} alt="Hero Image." />
        </a>
      </nav>
    </>
  )
}
