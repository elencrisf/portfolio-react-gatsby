import React from "react"
import {setConfig} from "react-hot-loader"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Images from "../components/Images/image"
import SEO from "../components/seo"

setConfig({
  showReactDomPatchNotification: false
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
        <h1 className="text-center">I am Elen Ferreira</h1>
        <h5 className="text-center">I'm a Web Designer.</h5>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Images name="image01" />
                {/* <img src={} className="d-block w-100" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <Images name="image02" />
              </div>
              <div className="carousel-item">
                <Images name="image03" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
