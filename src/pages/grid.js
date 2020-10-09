import React from 'react'
import { Link } from 'gatsby'
import './../components/Shared/global.css'
import './../components/Shared/gridDesign.css'
import Footer from './../components/Footer'
import Header from './../components/Header'

export default function gridDesign() {
  return (
    <>
      <Header />
      <section className="gridDesignHero">
        <div className="row">
          <div className="column">
            <h1>Unleash their online potential.</h1>
          </div>
          {/*
          <div className="column">
            <img className="heroBannerImg" src={HeroImg} alt="Hero Image." />
          </div>
            */}
        </div>
      </section>
      <section className="gridDesignHeroAfter">
        <h1>The Internet can be as scary place, let's change that&hellip;</h1>
      </section>

      <div>
        <section className="gridDesignGridIntro">
          <p>Learn about&hellip;</p>
        </section>

        <center>
          <div className="gridDesignGrid">
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
            <section className="gridDesign gridDesignSection1">
              <div>
                <h3>Example Topic</h3>
              </div>
            </section>
          </div>
        </center>
      </div>
      <Footer />
    </>
  )
}
