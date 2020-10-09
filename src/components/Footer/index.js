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
            <a href="http://0066cc.com/CyberKidzMVM/">CyberKidz</a>
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
