import React from 'react';
import features from 'data/Saas/features.json';
import featuresRTL from 'data/Saas/features-rtl.json';


import services from 'data/Saas/services.json';
import servicesRTL from 'data/Saas/services-rtl.json';

const Features = ({ isServices, rtl }) => {
  const featuresData = rtl ? featuresRTL : features;
  const servicesData = rtl ? servicesRTL : services;


  return (
    <section className={`features section-padding style-5 ${isServices ? 'pt-50':'bg-gray5'}`} data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {
              isServices ? 
              (
                <div className="section-head text-center mb-60 style-5">
                  <h2 className="mb-20">{ rtl ? '' : 'Our' } <span>{ rtl ? 'خدماتنا' : 'Services' }</span></h2>
                  <p>
                    { rtl ? 'نحن نقدم حلول تكنولوجيا المعلومات المثالية لعملك' : 'We provide perfect IT Solutions for your business' }
                  </p>
                </div>
              )
              :
              (
                <div className="section-head text-center mb-60 style-5">
                  <h2 className="mb-20">Other Awesome <span>Features</span></h2>
                  <p>
                    Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every functionality you need to build, run, and expand your marketplace
                  </p>
                </div>
              )
            }
          </div>
        </div>
        <div className="content">
          <div className="row">
            {
              servicesData.map((feature, i) => (
                <div className="col-lg-3" key={i}>
                  <a href="#" className="features-card mb-30 style-5">
                    <div className="icon">
                      <img src={feature.img} alt="" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">
                        { feature.info }
                      </h5>
                      <p className="text">
                        { feature.text }
                      </p>
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features