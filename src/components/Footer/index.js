import React from "react"
import { Link } from "gatsby"

import "./../Shared/global.css"
import "./../Shared/footer.css"

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <h2>
          <Link to="CyberKidzMVM/">CyberKidz</Link>
          </h2>
          <h3>Another Tagline</h3>
        </div>
        <div className="footerLinks">
          <div>
            <p>Some Link</p>
            <p>Some Link</p>
            <p>Some Link</p>
          </div>
          <div>
            <p>Some Link</p>
            <p>Some Link</p>
            <p>Some Link</p>
          </div>
          <div>
            <p>Some Link</p>
            <p>Some Link</p>
            <p>Some Link</p>
          </div>
        </div>
        <div>
          <p>&#x1F44B;</p>
        </div>
      </footer>
    </>
  )
}
