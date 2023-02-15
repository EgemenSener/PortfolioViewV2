import { date_formatter } from '../functions/functions.js';
import conf from '../conf.json';

function Experiences(props) {
    const experiences = []
    var delay = 1.2

    for (let i = 0; i < props.getPersonInfo.experience.length; i++) {
        experiences.push(
            <div className="wow fadeInUp color-white media" data-wow-delay={delay + "s"} key={i}>
                <div className="media-object media-left">
                    <img src={conf.SERVER_URL + props.getPersonInfo.experience[i].picture} width="50" height="50" />
                </div>
                <div className="media-body">
                    <h3 className="media-heading"><strong>{props.getPersonInfo.experience[i].title}</strong> {props.getPersonInfo.experience[i].country}</h3>
                    <h4 className="media-heading">{props.getPersonInfo.experience[i].title2}<small> {date_formatter(props.getPersonInfo.experience[i].startDate)} - {date_formatter(props.getPersonInfo.experience[i].endDate)}</small>
                    </h4>
                    <p className="color-white">{props.getPersonInfo.experience[i].description}
                    </p>
                </div>
            </div>
        )
        delay = delay + 0.4
    }

    return (
        <div>
            <section id="experience" className="parallax-section">
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-6">
                            <div id="experienceCards" className="color-white experience-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Experiences</h1>
                                    <p className="color-white">Previous companies and my tasks</p>
                                </div>
                                {experiences}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="experience-img"></div>
                        </div>
                    </div>
            </section>
        </div>
    )
}
export default Experiences;