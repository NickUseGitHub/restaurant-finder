import React from 'react';
import App from 'next/app';

import '../css/bootstrap.min.css';
import MainLayout from '../components/layout/MainLayout';

class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return { ...appProps };
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;
