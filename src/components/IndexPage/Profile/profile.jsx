import React from "react"
// import {setConfig} from "react-hot-loader"
// import { Link } from "gatsby"
import "./profile.scss";
import ImgProfile from "../../../images/elen_profile_bg.png"
// import ImageProfile from "../../Images/imageProfile"
// import BackgroundSection from "./profileBackground"
// import Layout from "../../Layout/layout"
// import Images from "../../Images/image"


const Profile = () => (
  <>
    {/* <SEO title="Home" /> */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <div>
            {/* <BackgroundSection /> */}
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <BackgroundSection /> */}
              </div>
              <div className="carousel-item">
                {/* <ProfileBackground /> */}
              </div>
              <div className="carousel-item">
                {/* <ImageProfile name="image03" /> */}
              </div>
              <div className="carousel-item">
                {/* <ImageProfile name="image03" /> */}
              </div>
            </div>
            <div className="profile">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <img className="img-responsive" src={ImgProfile} alt="" /> 
                    <div className="title text-center">
                      <h1>I am Elen Ferreira</h1>
                      <h5>I'm a Web Designer.</h5>
                    </div>
                  </div>
                </div>
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
    {/* <About />
    <Gallery />
    <Contact /> */}


    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </>
)

export default Profile;