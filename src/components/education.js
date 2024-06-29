import { date_formatter } from '../functions/functions.js';

function Education(props) {
    const education = []
    var delay = 1.2

    for (let i = 0; i < props.getPersonInfo.education.length; i++) {
        education.push(

            <div className="wow fadeInUp color-white media" data-wow-delay={delay} key={props.getPersonInfo.education}>
                <div className="media-object media-left">
                    <img src={process.env.PUBLIC_URL + props.getPersonInfo.education[i].picture} alt="" width="50" height="50" />
                </div>
                <div className="media-body">
                    <h3 className="media-heading"><strong>{props.getPersonInfo.education[i].title}</strong> {props.getPersonInfo.education[i].country}</h3>
                    <h4 className="media-heading">
                        <small> {date_formatter(props.getPersonInfo.education[i].startDate)} - {date_formatter(props.getPersonInfo.education[i].endDate)}</small>
                    </h4>
                    <p className="color-white">{props.getPersonInfo.education[i].description}</p>
                </div>
            </div>
        )
        delay = delay + 0.4
    }

    return (
        <div>
            <section id="education" className="parallax-section">
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-6">
                            <div id="educationInfo" className="color-white education-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Education</h1>
                                    <p className="color-white">Education information I received</p>
                                </div>
                                {education}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="education-img"></div>
                        </div>
                    </div>
            </section>
        </div>
    )

}

export default Education;
