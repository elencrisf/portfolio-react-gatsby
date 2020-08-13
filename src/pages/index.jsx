import React from "react"
import {setConfig} from "react-hot-loader"
// import { Link } from "gatsby"
// import "./index.scss";
// import ImgProfile from "../images/elen_profile_bg.png"
// import Layout from "../components/Layout/layout"
// import Images from "../components/Images/image"
import SEO from "../components/seo"
import About from "../components/IndexPage/About/about"
import Gallery from "../components/IndexPage/Gallery/gallery"
import Contact from "../components/IndexPage/Contact/contact"
import Profile from "../components/IndexPage/Profile/profile"

setConfig({
  showReactDomPatchNotification: false
})

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* <Layout> */}
    <Profile />
    <About />
    <Gallery />
    <Contact />
    {/* </Layout> */}
  </>
)

export default IndexPage


