import React from "react"
import { Link } from "gatsby"
import "./../components/Shared/global.css"
import "./../components/Shared/gridDesign.css"
import Footer from "./../components/Footer"
import Header from "./../components/Header"
import ResponseImg from "./../../../0066cc.github.io/static/cyber/grid/response.gif"
import CustomImg from "./../../../0066cc.github.io/static/cyber/grid/custom.gif"
import ProgressImg from "./../../../0066cc.github.io/static/cyber/grid/progress.gif"
import CheckImg from "./../../../0066cc.github.io/static/cyber/grid/check.gif"
import SignUpImg from "./../../../0066cc.github.io/static/cyber/grid/diamond.gif"
import GroupImg from "./../../../0066cc.github.io/static/cyber/grid/group.png"
import SchoolImg from "./../../../0066cc.github.io/static/cyber/grid/school.png"
import GraduationImg from "./../../../0066cc.github.io/static/cyber/grid/graduation.png"

export default function gridDesign() {
  return (
    <>
      <Header />

      <div className="gridHero">
        <div className="row">
          <div
            className="column"
            data-sal="slide-left"
            data-sal-duration="750"
            data-sal-delay="10"
            data-sal-easing="ease"
          >
            <h1 className="logo gridHeroHeader">CyberKidz</h1>
            <h2 className="gridHeroSubHeader">
              The skills they need for the future.
            </h2>
          </div>
          <div
            className="column"
            data-sal="slide-right"
            data-sal-duration="750"
            data-sal-delay="10"
            data-sal-easing="ease"
          >
            <img className="gridHeroImg" src={SchoolImg} alt="Hero Image." />
          </div>
        </div>
      </div>

      <div className="gridPageIntro">
        <div className="row">
          <div
            className="column"
            data-sal="slide-up"
            data-sal-duration="750"
            data-sal-delay="10"
            data-sal-easing="ease"
          >
            <p>
              This is a long-winded introduction to what CyberKidz is and why
              it's important. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Proin elementum interdum felis vel hendrerit. Vivamus
              gravida faucibus orci, quis pretium massa tempor non. Aliquam
              felis tellus, consequat condimentum ex sed, bibendum venenatis
              est. Nam in lectus urna. Donec ac bibendum quam. Proin porttitor
              sem et suscipit tempus. Nulla sed quam ut ante convallis
              condimentum. Vestibulum egestas sodales faucibus. Morbi quis risus
              tristique, viverra sapien at, feugiat nibh. Duis eu nibh bibendum,
              convallis lectus vel, efficitur nunc. Ut imperdiet, velit eget
              tempus malesuada, lorem orci egestas urna, nec imperdiet felis
              neque et lectus. Duis egestas elit rhoncus risus consectetur, quis
              malesuada turpis vestibulum. In mollis euismod lectus, in finibus
              massa aliquet sit amet. Vestibulum tristique feugiat purus.
              Quisque sit amet nulla et ipsum egestas vehicula.
            </p>

            <p>
              Fusce a laoreet urna, euismod fermentum metus. Vestibulum
              facilisis ut felis non auctor. Proin tortor dui, finibus vel
              faucibus ac, fermentum sed sem. Praesent viverra vestibulum
              maximus. Morbi sit amet odio id lacus feugiat tempus vel non sem.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vivamus lacus elit, tincidunt
              ac neque ac, imperdiet pharetra lacus. Integer feugiat, lectus ac
              feugiat pellentesque, massa eros laoreet nunc, at scelerisque odio
              erat at metus. Maecenas id convallis nibh. Aliquam commodo
              bibendum egestas. Fusce facilisis risus non augue viverra, et
              blandit libero porttitor. Fusce consectetur, nunc a ullamcorper
              scelerisque, tellus urna laoreet nibh, eu molestie risus sapien
              nec sem. Mauris iaculis quam eu accumsan tempus.
            </p>
          </div>
        </div>
      </div>

      <div className="gridHero">
        <div className="row">
          <div
            className="column gridAgeIntro"
            data-sal="fade"
            data-sal-delay="10"
            data-sal-easing="ease"
          >
            <h1 className="logo">CyberKidz</h1>
            <h2>The skills they need for the future.</h2>
            <h3>Suitable for all ages.</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <section
            className="gridDesignContainer"
            data-sal="fade"
            data-sal-delay="250"
            data-sal-easing="ease"
          >
            <section className="gridDesignGridIntro">
              <h1>5 - 6</h1>
            </section>
            <div className="gridDesignGrid">
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
            </div>
          </section>
        </div>

        <div className="column">
          <section
            className="gridDesignContainer"
            data-sal="fade"
            data-sal-delay="250"
            data-sal-easing="ease"
          >
            <section className="gridDesignGridIntro">
              <h1>7 - 8</h1>
            </section>
            <div className="gridDesignGrid">
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
            </div>
          </section>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <section
            className="gridDesignContainer"
            data-sal="fade"
            data-sal-delay="250"
            data-sal-easing="ease"
          >
            <section className="gridDesignGridIntro">
              <h1>9 and Up</h1>
            </section>
            <div className="gridDesignGrid">
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
              <section className="gridDesignItem">
                <h3>Example Topic</h3>
              </section>
            </div>
          </section>
        </div>
      </div>

      <div className="gridEnvironmentContainer">
        <div className="row">
          <div
            className="column"
            data-sal="slide-down"
            data-sal-delay="10"
            data-sal-duration="350"
            data-sal-easing="ease"
          >
            <h1>For Any Environment&hellip;</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="column"
            data-sal="slide-right"
            data-sal-delay="10"
            data-sal-duration="350"
            data-sal-easing="ease"
          >
            <h2>For Parents&hellip;</h2>
            <img
              className="gridFeaturesPostImg"
              src={GroupImg}
              alt="Hero Image."
            />
          </div>
          <div
            className="column"
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-duration="350"
            data-sal-easing="ease"
          >
            <h2>&hellip;and Teachers</h2>
            <img
              className="gridFeaturesPostImg"
              src={GraduationImg}
              alt="Hero Image."
            />
          </div>
        </div>
      </div>

      <div
        className="gridDesignFeaturesContainer"
        data-sal="fade"
        data-sal-delay="10"
        data-sal-duration="450"
        data-sal-easing="ease"
      >
        <section className="gridDesignGridFeaturesIntro">
          <h1>A Modern Way To Learn</h1>
        </section>
        <div className="row">
          <div className="column">
            <h3>Learn Anywhere</h3>
            <img
              className="gridFeatureImg"
              src={ResponseImg}
              alt="Hero Image."
            />
          </div>
          <div className="column">
            <h3>Reward Progress</h3>
            <img
              className="gridFeatureImg"
              src={ProgressImg}
              alt="Hero Image."
            />
          </div>
          <div className="column">
            <h3>Deepen Understanding</h3>
            <img className="gridFeatureImg" src={CheckImg} alt="Hero Image." />
          </div>
          <div className="column">
            <h3>Adjust Content</h3>
            <img className="gridFeatureImg" src={CustomImg} alt="Hero Image." />
          </div>
        </div>
      </div>

      <div className="gridSignUp">
        <div className="row">
          <div
            className="column"
            data-sal="fade"
            data-sal-duration="1750"
            data-sal-delay="10"
            data-sal-easing="ease"
          >
            <h1 className="logo">CyberKidz</h1>
            <h4 className="gridSignUpSubHeader">
              Technology doesn't wait, why should you?
            </h4>
            <p className="gridSignUpBtn">Start learning today</p>
            <img className="gridSignUpImg" src={SignUpImg} alt="Hero Image." />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
