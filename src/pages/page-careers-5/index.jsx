import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/SaasNav';
import Header from 'components/Style2/Header';
import Features from 'components/Style2/Careers/Features';
import Images from 'components/Style2/Careers/Images';
import Positions from 'components/Style2/Careers/Positions';
import CareerForm from 'components/Style2/CareerDetails/CareerForm';
import Footer from 'components/Saas/Footer';

const PageCareers = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="5" />
      <Navbar navbarRef={navbarRef} />
      <Header page="careers" title="careers Page" />
      <main className="careers-page style-5 pt-100">
        <Features />
        <Images />
        <Positions />
        <CareerForm />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Careers</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageCareers;