import { date_formatter } from '../functions/functions.js';
import conf from '../conf.json'

function Certificates(props) {

    const certificates = []
    var delay = 1.2

    for (let i = 0; i < props.getPersonInfo.certificates.length; i++) {
        certificates.push(
            <div className="wow fadeInUp color-white media" data-wow-delay={delay + "s"} key={props.getPersonInfo.certificates}>
                <div className="media-object media-left">
                    <img src={conf.SERVER_URL + props.getPersonInfo.certificates[i].picture} width="50" height="50" />
                </div>
                <div className="media-body">
                    <h3 className="media-heading"><strong>{props.getPersonInfo.certificates[i].title}</strong></h3>
                    <h4 className="media-heading"><small>{date_formatter(props.getPersonInfo.certificates[i].startDate)} - {date_formatter(props.getPersonInfo.certificates[i].endDate)}</small></h4>
                    <p className="color-white">{props.getPersonInfo.certificates[i].description}</p>
                </div>
            </div>
        )
        delay = delay + 0.4
    }

    return (
        <div>
            <section id="certificates" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div id="certificatesInfo" className="color-white education-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Certificates</h1>
                                    <p className="color-white">Certificates I have received</p>
                                </div>
                                {certificates}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="background-image education-img"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Certificates;