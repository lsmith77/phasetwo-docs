import React, { useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CodeBlock from '@theme/CodeBlock';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function Apis() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  /*
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal () {
    this.setState({isOpen: true})
  }
*/

  useEffect(() => {
    document.body.classList.add('page-bg');
  });


  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tools for SaaS builders">

      {/* Main Content */}
      <main>
	<SwaggerUI url="https://raw.githubusercontent.com/p2-inc/phasetwo-docs/master/openapi.yaml" />
      </main>

    </Layout>
  );
}

export default Apis;
