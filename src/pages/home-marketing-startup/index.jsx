import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Header from 'components/Startup/Header';
import About from 'components/Startup/About';
import Services from 'components/Startup/Services';
import Project from 'components/Startup/Project';
import ChooseUs from 'components/Startup/ChooseUs';
import Testimonials from 'components/Startup/Testimonials';
import Clients from 'components/Startup/Clients';
import Numbers from 'components/Startup/Numbers';
import Team from 'components/Startup/Team';
import Blog from 'components/Startup/Blog';
import Contact from 'components/Startup/Contact';
import Footer from 'components/Startup/Footer';

const HomeMarketingStartup = () => {
  return (
    <MainLayout>
      <Header />
      <main>
        <About />
        <Services />
        <Project />
        <ChooseUs />
        <Testimonials />
        <Clients />
        <Numbers />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Marketing Startup</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeMarketingStartup;