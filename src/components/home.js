import { getPersonInfo } from '../routes/routes.js';
import { calculate_age, date_formatter } from '../functions/functions.js';

//Home and description about my life
function Home(props) {
    return (
        <div className="row" id='home'>
            <div className='col-md-6'>
                <div className="home-img"></div>
            </div>
            <div className="col-md-6">
                <div className="home-thumb">
                    <div className="section-title">
                        <h4 className="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                        <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>{props.getPersonInfo.name}</strong> currently based in {props.getPersonInfo.city} city.</h1>
                        <p className="wow fadeInUp" data-wow-delay="0.9s">I am {props.getPersonInfo.name} {props.getPersonInfo.surname}. I was born in {date_formatter(props.getPersonInfo.bornDate)} in {props.getPersonInfo.from}. I am {calculate_age(new Date(props.getPersonInfo.bornDate))} years old and I graduated from {props.getPersonInfo.education[0].title} {props.getPersonInfo.education[0].description} about {calculate_age(new Date(props.getPersonInfo.education[0].endDate))} year ago. My first experience was on {props.getPersonInfo.experience[3].title2}. I worked on {props.getPersonInfo.experience[3].description} at {props.getPersonInfo.experience[3].title}. My second and more important internship was {date_formatter(props.getPersonInfo.experience[2].startDate)}. {props.getPersonInfo.experience[2].description}. Before I graduated from school, I took a {Object.keys(props.getPersonInfo.skills[2])} programming course and learned {Object.keys(props.getPersonInfo.skills[2])}. While I was still at school, I took the {props.getPersonInfo.experience[1].title3} exam and I won. After that, I agreed with one of the proffesor at {props.getPersonInfo.experience[1].title}. {props.getPersonInfo.experience[1].description} in {props.getPersonInfo.experience[1].country}.  At the same time, I actively used {Object.keys(props.getPersonInfo.skills[8])} system. After that, I returned to my country and took the {props.getPersonInfo.certificates[0].description} course opened by {props.getPersonInfo.certificates[0].title}, and at the same time I tried to improve my algorithm skills from platforms such as Hacker-rank, after which I started to work as a web developer at {props.getPersonInfo.experience[0].title} company and still work in this company especially in {Object.keys(props.getPersonInfo.skills[2])}. I am continuing my work on it. These are my experiences in general.</p>

                        <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;