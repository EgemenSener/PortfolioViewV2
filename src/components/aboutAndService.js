function About(props) {
     const skills = []

     //Skills data 
     props.getPersonInfo.skills.forEach(i => {
          skills.push(
               <div key={Object.keys(i)}>
                    <strong>{Object.keys(i)}</strong>
                    <span className="color-white pull-right">{Object.values(i)}</span>
                    <div className="progress">
                         <div className="progress-bar progress-bar-primary" role="progressbar"
                              aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                              style={{ width: Object.values(i) }}>

                         </div>
                    </div>
               </div>
          )
     });

     return (
          <div>
               <section id="about" className="parallax-section">
                    <div className="row g-0">
                         <div className="col-md-3">
                              <div className="about-thumb">
                                   <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                                        <h1>My personality</h1>
                                        <p className="color-yellow">About me</p>
                                   </div>
                                   <div id="personInfo" className="wow fadeInUp" data-wow-delay="0.8s">
                                        <p>{props.getPersonInfo.personalInfo}</p>
                                        <p>{props.getPersonInfo.personalInfo2}</p>
                                   </div>
                              </div>
                         </div>
                         <div className="bg-yellow col-md-3">
                              <div className="skill-thumb">
                                   <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                                        <h1>My Skills</h1>
                                        <p className="color-white">technology I know and my level ratio</p>
                                   </div>

                                   <div id="skills" className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                                        {skills}
                                   </div>
                              </div>

                         </div>
                         <div className="col-md-6">
                              <div className="about-img"></div>
                         </div>
                    </div>
               </section>
               <section id="service" className="parallax-section">
                         <div className="row g-0">
                              <div className="bg-dark col-md-3 col-sm-6">
                                   <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                                        <i className="fa fa-table"></i>
                                        <h3>{Object.keys(props.getPersonInfo.field[0])}</h3>
                                        <p className="color-white">{Object.values(props.getPersonInfo.field[0])}</p>
                                   </div>
                              </div>

                              <div className="bg-white col-md-3 col-sm-6">
                                   <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                                        <i className="fa fa-html5"></i>
                                        <h3>{Object.keys(props.getPersonInfo.field[1])}</h3>
                                        <p>{Object.values(props.getPersonInfo.field[1])}</p>
                                   </div>
                              </div>
                         </div>
               </section>
          </div>
     )
}

export default About;




