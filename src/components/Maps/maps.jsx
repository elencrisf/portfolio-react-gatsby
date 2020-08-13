import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 49.25,
    lng: -123.12,
  },
  zoom: 11,
}

console.log(process.env.GATSBY_GOOGLE_MAPS_STATIC_API_KEY)

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div className="mx-auto" style={{ height: '50vh', width: '60%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_STATIC_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={49.246292}
        lng={-123.116226}
        text={'Vancouver BC'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap




// import React from 'react';
// // import { Link } from 'gatsby';
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";


// const Maps = (props) => {

//     const { maps } = useStaticQuery(graphql`
//     query StaticMapQuery {
//         maps: staticMap {
//             childFile {
//                 childImageSharp {
//                     fluid(maxWidth: 1200, maxHeight: 800) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//     }
//   `)

//     return (
//         <>
//         <div>
//             <a href="https://www.google.com/maps">
//             <Img fluid={maps.childImageSharp.fluid} alt="GoogleMaps"/>
//             </a>
//         </div>
//         </>
//     );
// };

// export default Maps;
