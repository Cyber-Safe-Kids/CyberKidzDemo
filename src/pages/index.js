import React from "react"
import { Link } from "gatsby"
import "./../components/Shared/global.css"
import Footer from "./../components/Footer"

export default function Home() {
  return (
    <>
      <section>
        <div className="row">
          <div className="column">
            <h2>
              <a href="http://0066cc.com/CyberKidzMVM/block/">Block Colours</a>
            </h2>
          </div>
          <div className="column">
            <h2>
              <a href="http://0066cc.com/CyberKidzMVM/grid/">Floating grid</a>
            </h2>
          </div>
          <div className="column">
            <h2>
              <a href="http://0066cc.com/CyberKidzMVM/post/">Test post</a>
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
