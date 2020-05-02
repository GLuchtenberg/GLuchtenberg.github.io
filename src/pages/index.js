import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Gabriel Luchtenberg" />
      <div className="me">
        <div className="picture">
          <Image />
        </div>
        <h1>
          Gabriel Luchtenberg
          <br />
          <small>Software engineer</small>
        </h1>
      </div>
      <div className="contact">
        <div className="link-container">
          <a className="social-media">
            <Github />
            <p>GLuchtenberg</p>
          </a>
          <a href="http://twitter.com/GLuchtenberg" className="social-media">
            <Twitter />
            <p>GabrLuchtenberg</p>
          </a>
          <a className="social-media">
            <Linkedin />
            <p>gabriel-lucht</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
