import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="content">
      <div class="post">
        <h1><a href="https://krishnasingh.co.in/">Krishna singh</a>: <strong>software engineer</strong></h1>
        <div class="entry">
          <div>works at: <a href="http://www.groupten.com/">Group10</a></div>
          <div>knows: <a href="http://php.net/manual/en/intro-whatis.php">php</a> / <a href="https://www.drupal.org/">drupal</a> / <a href="https://reactjs.org/">reactjs</a></div>
          <div>twitter:   <a href="https://twitter.com/hakkk99">hakkk99</a></div>
          <div>github:   <a href="https://github.com/kk5190">kk5190</a></div>
          <div>find more at:   <a href="https://www.linkedin.com/in/krishnaksingh/">Linkedin</a></div>
        </div>
        <small></small>
      </div>
      <div id="footer">
        <p><a href="https://krishnasingh.co.in/">main</a> :: <a href="https://krishnasingh.co.in/skills/">skills</a> :: <a href="https://medium.com/@hakkk99">articles</a> </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
