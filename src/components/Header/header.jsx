import { Link } from "gatsby";
// import PropTypes from "prop-types"
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./header.scss";
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"

const Header = () => {

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Elen-perfil.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="headerNav">
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-gatsby-dark">
        <Link className="navbar-brand"to="/">
          <Img fixed={logo.childImageSharp.fixed} alt="Logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
              <Link to="/" activeStyle={{ color: "#C9ABDB" }} className="nav-link" activeClassName="active"
            >HOME</Link>
              </li>
              <li className="nav-item">
              <Link to="/about/" activeStyle={{ color: "#C9ABDB" }} className="nav-link" activeClassName="active"
            >ABOUT</Link>
              </li>
              <li className="nav-item">
              <Link to="/gallery/" activeStyle={{ color: "#C9ABDB" }} className="nav-link" activeClassName="active"
            >PROJECTS</Link>
              </li>
              <li className="nav-item">
              <Link to="/contact/" activeStyle={{ color: "#C9ABDB" }} className="nav-link" activeClassName="active"
            >CONTACT</Link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;




// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
