import React, { useRef, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import first from "../images/1.png"
import second from "../images/2.png"
import third from "../images/3.png"
import fourth from "../images/4.png"
import fifth from "../images/5.png"
import sixth from "../images/6.png"
import seventh from "../images/7.png"
import eighth from "../images/8.png"
import nineth from "../images/9.png"
import tenth from "../images/10.png"

const imgArray = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  nineth,
  tenth,
]

const IndexPage = () => {
  console.log("yes")
  const [clickedItem, setClickedItem] = useState()
  const [clicked, setClicked] = useState(false)
  // const clicked = () => setClicked(true);
  const popup = () => setClicked(clicked => !clicked)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  const ref9 = useRef(null)
  const ref10 = useRef(null)

  let images = new Array(8)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
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

      </div>
       */}
      <div>
        {imgArray.map((el, i) => {
          const isClicked = clickedItem === i
          return (
            <div
              // ref={ref}
              ref={ref0}
              className={`image-${i}`}
              onClick={() => setClickedItem(i)}
            >
              <img
                src={el}
                style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                alt=""
              />
              {isClicked ? (
                <div
                  style={{
                    border: "1px solid blue",
                    // display: isClicked ? "none" : null,
                  }}
                >
                  hello Better
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
