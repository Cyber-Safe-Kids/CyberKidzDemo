//Import react because we need it
import React from "react"
//Imports wrapped in {} imports only the item inside intead of the full library
// Use Link for internal pages, use regular 'a href' for external links
import { Link } from "gatsby"

//Import component from other file, note that you need to do the './' at the start
import Footer from "./../components/Footer"
import Header from "./../components/Header"
//CSS is treated as-is so doesn't need a name or anything, just the file path
import "./../components/Shared/global.css"
import "./../components/Shared/block.css"

//Export is basically 'create a thing' or 'create a page', you can name it whatever you want, the file name will be used at the path name in the url.
//e.g File is called about.js will turn into website.com/about/
export default function Block() {
  /*
   * Comments inside the return statement are declared with \{\/**\/\}
   * You can write most HTML as normal, only key difference is that 'class' becomes 'className' (class is a reserved word in react)
   * Wrap return statements with multiple elements in a <> </>
   */
  return (
    <>
      <Header />
      {/*This is a component, its what was included with the 'import Header' line above*/}
      <section className="block blockSection1">
        <div className="row">
          <div className="column">
            <h1>
              The
              <br />
              Internet&hellip;
            </h1>
          </div>
          <div className="column">
            <p>
              <b className="paragraph_tagline">
                &hellip;can be a scary place. Let's change that.
              </b>{" "}
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>

      <section className="block blockSection2">
        <div className="row">
          <div className="column">
            <h1>CyberKidz</h1>
            <h2>Some Catchy Tagline</h2>
          </div>
        </div>
      </section>

      <section className="block blockSection3">
        <div className="row">
          <div className="column">
            <h1>
              Empower
              <br />
              children&hellip;
            </h1>
          </div>
          <div className="column">
            <p>
              <b className="paragraph_tagline">
                &hellip;with strong foundational knowledge.
              </b>{" "}
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>

      <section className="block blockSection4">
        <div className="row">
          <div className="column">
            <h1>For Teachers or Parents&hellip;</h1>
            <h2>&hellip;some statement that emphasises point.</h2>
          </div>
        </div>
      </section>

      <section className="block blockSection5">
        <div className="row">
          <div className="column">
            <h1>Important Statistic</h1>
          </div>
          <div className="column">
            <h1>95%</h1>
            <p>
              <b className="paragraph_tagline">That's an important number.</b>{" "}
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>

      <section className="block blockSection6">
        <div className="row">
          <div className="column">
            <h1>
              Learn
              <br />
              anywhere&hellip;
            </h1>
          </div>
          <div className="column">
            <p>
              <b className="paragraph_tagline">
                &hellip;and always be up to date.
              </b>{" "}
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>
      <section className="block blockSection7">
        <div className="row">
          <div className="column">
            <h2>Passwords</h2>
            <p>
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
          <div className="column">
            <h2>Usernames</h2>
            <p>
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
          <div className="column">
            <h2>Internet</h2>
            <p>
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>

      <section className="block blockSection8">
        <div className="row">
          <div className="column">
            <h1>
              At this
              <br />
              point&hellip;
            </h1>
          </div>
          <div className="column">
            <p>
              <b className="paragraph_tagline">
                &hellip;I've ran out of ideas.
              </b>{" "}
              Sed volutpat libero aliquet metus condimentum condimentum.
              Suspendisse nec euismod erat, at porttitor libero. Nulla eu tortor
              eget dui facilisis posuere. Donec volutpat euismod erat, quis
              tristique ex pulvinar cursus. Fusce in quam sed nibh luctus
              pulvinar et at mi. Aliquam ut condimentum neque, ac ornare magna.
              Etiam tempor varius condimentum. Vivamus dapibus vestibulum justo
              sit amet maximus. Cras tortor eros, laoreet in mollis sit amet,
              bibendum vel nulla. Quisque id neque porttitor, fringilla turpis
              at, egestas mauris. Cras bibendum ex at enim convallis, at
              facilisis nibh sodales. Nunc tempor, dui sed laoreet dapibus, nisi
              odio maximus sapien, nec vehicula metus libero sagittis lacus.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
