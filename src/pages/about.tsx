// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Layout pageTitle='About Page'>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

const Head = () => <title>About Me</title>

export default AboutPage;