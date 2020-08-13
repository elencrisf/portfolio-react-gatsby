import React from "react"
import "./src/styles/styles.scss"

import Layout from "./src/components/Layout/layout"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export default wrapPageElement
