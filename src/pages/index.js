import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import first from "../images/first.png"
import second from "../images/second.png"
// import third from "../images/third.png"
import fourth from "../images/fourth.png"
import fifth from "../images/fifth.png"
import sixth from "../images/sixth.png"
import seventh from "../images/seventh.png"
// import eighth from "../images/eighth.png"

const IndexPage = () => {
  console.log("yes")
  const [clicked, setClicked] = useState(false)
  // const clicked = () => setClicked(true);
  const popup = () => setClicked(clicked => !clicked)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <div onClick={popup}>
          <img
            style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
            src={first}
            alt=""
          />
          <div
            style={{
              border: "1px solid blue",
              display: clicked ? "none" : null,
            }}
          >
            hello
          </div>
        </div>
        <div onClick={popup}>
          <img
            style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
            src={second}
            alt=""
          />
          <div
            style={{
              border: "1px solid blue",
              display: clicked ? "none" : null,
            }}
          >
            hello
          </div>
        </div>
        <img
          style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
          src={fourth}
          alt=""
        />
        <img
          style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
          src={fifth}
          alt=""
        />
        <img
          style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
          src={sixth}
          alt=""
        />
        {/* <Image /> */}
      </div>
    </Layout>
  )
}

export default IndexPage
