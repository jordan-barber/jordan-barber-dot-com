import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Heading from '../components/home/Heading';
import Footer from '../components/Footer';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Tech from '../components/tech/Tech';

class IndexPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <SEO title="Home"/>
                    <Heading />
                    <Footer/>
                </Layout>
                <About />
                <Tech />
                <Skills />
            </Fragment>
        );
    }
}

export default IndexPage;
