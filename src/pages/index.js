import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/home/heading"
import Footer from "../components/footer";

const IndexPage = () => (
    <Fragment>
        <Layout>
            <SEO title="Home" />
            <Heading />
            <Footer />
        </Layout>
        <div style={{height: 2000, marginTop: 64, color: '#ffffff'}}>foo</div>
    </Fragment>
)

export default IndexPage
