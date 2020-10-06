import React from 'react'
import { Link } from 'gatsby'
import './../components/global.css'
import './../components/example.css'

export default function example() {
  return (
    <>
      <article>
        <h1>Passwords</h1>
        <img src="https://loremflickr.com/384/216" width="384" height="216" />
        <p>
          Cras tincidunt efficitur tempor. Morbi finibus enim vitae sapien
          rhoncus, vel molestie est dictum. Etiam finibus lacinia arcu, at
          pulvinar lorem tristique id. Ut posuere luctus felis, sit amet
          convallis nisi ornare fermentum. Nunc vitae mollis velit. Suspendisse
          vel vehicula ante. Sed et leo a justo elementum facilisis.
          Pellentesque ut orci id felis dictum cursus. Nunc ullamcorper tempus
          dui, id viverra nisl accumsan at. Donec faucibus facilisis purus, non
          ullamcorper elit porta ut. Nullam at dignissim dui.
        </p>
        <p>
          Sed eu fermentum neque. Phasetlus imperdiet fringilla nulla. Proin at
          tortor nibh. Vivamus condimentum eget massa quis posuere. Vestibulum
          euismod, purus sed ultricies lobortis, nisl tellus auctor ipsum, ac
          bibendum diam ex sit amet dolor. Nam varius semper egestas. Ut ut
          pharetra nibh, at ultricies nunc.
        </p>
        <p>
          Cras in dolor sed risus efficitur placerat. Aenean dignissim leo id
          diam rutrum consequat. Aliquam justo turpis, interdum et dictum
          tincidunt, euismod et libero. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Proin a neque
          quis nisi ullamcorper viverra. Maecenas est massa, mollis ut faucibus
          sit amet, aliquet id nunc. Praesent aliquam purus a lectus
          sollicitudin suscipit. Nulla quis elit magna. Ut gravida aliquet odio,
          in placerat quam fermentum eget. Aliquam sagittis, mi eget cursus
          semper, sapien enim pretium nisi, non semper lectus nisi et nulla.
          Vivamus nec est cursus, eleifend elit quis, venenatis mi.
        </p>
        <p>
          Quisque semper non urna sit amet mattis. Nulla imperdiet congue
          tortor, non scelerisque magna. Morbi id lacinia enim. Vestibulum
          ligula enim, condimentum eget augue id, congue rhoncus leo.
          Pellentesque at facilisis turpis, at interdum est. Praesent ac
          vulputate dui, ut ornare mauris. Vivamus quis ligula vehicula,
          tristique tellus sit amet, laoreet odio.
        </p>
        <p>
          Pellentesque cursus eleifend velit, nec consectetur quam varius in.
          Curabitur eget fermentum neque. Sed sagittis velit ac ipsum facilisis,
          eu eleifend nunc interdum. Nullam vestibulum nulla erat, et auctor
          sapien pharetra vel. Morbi aliquam magna eget pulvinar dignissim.
          Nulla fringilla accumsan tellus, sed aliquam urna mattis sit amet.
          Vivamus quis sapien eros. Duis maximus efficitur dignissim. Vestibulum
          elementum nulla augue. Praesent blandit mi vel orci vestibulum, et
          pellentesque nulla dictum. Integer fermentum convallis nibh sed
          elementum. Proin tempus nunc et metus laoreet ultricies. Integer
          laoreet sollicitudin eleifend.
        </p>
        <p>
          Curabitur luctus pellentesque leo eget semper. Nulla non lobortis
          risus, in volutpat turpis. Curabitur pharetra turpis sed purus
          tristique consectetur. Phasellus ac fermentum est. Maecenas sed mauris
          nec arcu iaculis tristique. Donec ut sodales magna, non blandit
          turpis. Etiam scelerisque sapien felis, nec efficitur magna dapibus
          et. Donec quis mollis quam. Ut sed pellentesque felis. Quisque
          fringilla leo at lorem pharetra vulputate. Duis id lorem nec lorem
          semper condimentum quis eget massa. Nunc viverra risus quis felis
          vehicula vulputate at id massa. Etiam interdum euismod nisi, non
          bibendum erat lobortis in. Nulla eu ipsum vitae enim laoreet tristique
          quis vel libero.
        </p>
      </article>

      <footer>
        <div>
          <h2>
          <Link to="/">CyberKidz</Link>
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
