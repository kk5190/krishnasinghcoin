import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
      <p>Senior software engineer</p>
      <div className="entry">
        <p>A Full Stack developer with more than four years of experience in site building, frontend and backend development. Driven to provide excellent service and high-quality coding to create secure and functional sites for clients. Expert in content management systems and up to date on the latest developments and versions. </p>
      </div>
      <div className="entry">
        <h1>Skills</h1>
        <p> HTML, CSS, JS, PHP, SQL, jQuery, React JS, MySQL, Drupal, Git, Bootstrap, Python</p>
      </div>
      <div className="entry">
        <h1>Experience</h1>
        <div className="section">
          <div class="inline">
            <span><strong>Promantus India</strong></span>
            <span>Gurgaon, India</span>
          </div>
          <div class="inline">
            <span><small>Senior Software Engineer</small></span>
            <span><small>May 19 – Present</small></span>
          </div>
          <div className="section-description">
            <p>Works closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.</p>
          </div>
        </div>

        <div className="section">
          <div class="inline">
            <span><strong>Group10 Technologies</strong></span>
            <span>Gurgaon, India</span>
          </div>
          <div class="inline">
            <span><small>Software Engineer</small></span>
            <span><small>May 16 – Apr 19</small></span>
          </div>
          <div class="inline">
            <span><small>Software Engineer - Intern</small></span>
            <span><small>Jan 16 – Apr 16</small></span>
          </div>
          <div className="section-description">
            <p>Development and maintenance of CMS-driven websites built using Drupal.</p>
          </div>
        </div>
      </div>
      <div className="entry">
        <h1>Education</h1>
        <div className="section">
          <div class="inline">
            <span><strong>Master of Computer Application</strong></span>
            <span>2013 - 2016</span>
          </div>
          <div className="section-description">
            <p>Pondicherry University, Puducherry</p>
          </div>
        </div>
        
        <div className="section">
          <div class="inline">
            <span><strong>Master of Science (Mathematics)</strong></span>
            <span>2010 - 2012</span>
          </div>
          <div className="section-description">
            <p>B. R. Ambedkar Bihar University, Muzaffarpur, Bihar</p>
          </div>
        </div>
        
        <div className="section">
          <div class="inline">
            <span><strong>Bachelor of Science (Mathematics)</strong></span>
            <span>2007 - 2010</span>
          </div>
          <div className="section-description">
            <p>L. S. College,  Muzaffarpur, Bihar</p>
          </div>
        </div>

      </div>
      
      
  </Layout>
)

export default IndexPage
