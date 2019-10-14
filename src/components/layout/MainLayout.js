import React from 'react';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import ContentWrapper from './content/ContentWrapper';

export default function MainLayout(props) {
  return (
    <div className="layout-container">
      <NavBar />
      <ContentWrapper>{props.children}</ContentWrapper>
      <Footer />
    </div>
  );
}
