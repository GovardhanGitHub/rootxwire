import React from 'react';
import { Link } from 'gatsby';
import projects from 'data/Software/projects.json';

const Projects = () => {
  return (
    <section className="projects section-padding style-3" data-scroll-index="4">
      <div className="container">
        <div className="section-head style-3 text-center">
          <h3>Our Featured <span>Projects</span></h3>
        </div>
        <div className="content">
          <div className="row">
            {
              projects.map((project, i) => (
                <div className={i === 0 ? 'col-lg-7' : i === 1 ? 'col-lg-5' : 'col-lg-6'} key={i}>
                  <div className="project-card d-block mb-30 style-3">
                    <Link to="/page-single-project-5" className="img img-cover d-block">
                      <img src={project.image} alt="" />  
                    </Link>
                    <div className="info">
                      <h5 className="h5"><Link to="/page-single-project-5">{ project.title }</Link></h5>
                      <small className="small"><a href="#">{ project.description }</a></small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="text-center">
            <Link to="/page-portfolio-5" className="btn rounded-pill bg-blue2 sm-butn mt-60 text-white">
              <span>See All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects