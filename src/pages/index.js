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
              <Link to="/block/">Block Colours</Link>
            </h2>
          </div>
          <div className="column">
            <h2>
              <Link to="/grid/">Floating Cards</Link>
            </h2>
          </div>
          <div className="column">
            <h2>
              <Link to="/post/">Test Post</Link>
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
