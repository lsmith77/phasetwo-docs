import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './../styles.module.css';
import { render } from "react-dom";

var ReactRotatingText = require('react-rotating-text');

function getStarted() {
  window.open(
    `https://phasetwo.io/dashboard/`,
    '_blank'
  );
}
   
function Organizations() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tools for SaaS builders">

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <div>main content here</div>

      </main>

    </Layout>
  );
}

export default Organizations;
