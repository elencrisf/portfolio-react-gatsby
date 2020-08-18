import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 49.25,
    lng: -123.12,
  },
  zoom: 11,
}

// query StaticMapQuery {
//   staticMap {
//       childFile {
//           childImageSharp {
//               fluid {
//                   # or fixed
//                   ...GatsbyImageSharpFluid
//               }
//           }
//       }
//   }
// }
// console.log(process.env.GATSBY_GOOGLE_MAPS_STATIC_API_KEY)

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div className="mx-auto" style={{ height: '50vh', width: '70%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'process.env.GOOGLE_MAPS_STATIC_API_KEY' }}
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


