import { Link } from "gatsby";
// import PropTypes from "prop-types"
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"

const Header = () => {

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Elen-perfil.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand"to="/">
          <Img fixed={logo.childImageSharp.fixed} alt="Logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <Link to="/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active"
            >Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/about/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active"
            >About</Link>
              </li>
              <li className="nav-item">
              <Link to="/gallery/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active"
            >Projects</Link>
              </li>
              <li className="nav-item">
              <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active"
            >Contact</Link>
              </li>
          </ul>
        </div>
      </nav>
    </>
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
