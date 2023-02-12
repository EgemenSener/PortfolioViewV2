import { getPersonInfo } from '../routes/routes.js';
import { calculate_age, date_formatter } from '../functions/functions.js';

const getPersonInfoo = await getPersonInfo()

//Home and description about my life
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="home-img"></div>
                </div>

                <div className="col-md-6 col-sm-6">
                    <div className="home-thumb">
                        <div className="section-title">
                            <h4 className="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                            <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>{getPersonInfoo.name}</strong> currently based in {getPersonInfoo.city} city.</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.9s">I am {getPersonInfoo.name} {getPersonInfoo.surname}. I was born in {date_formatter(getPersonInfoo.bornDate)} in {getPersonInfoo.from}. I am {calculate_age(new Date(getPersonInfoo.bornDate))} years old and I graduated from {getPersonInfoo.education[0].title} {getPersonInfoo.education[0].description} about {calculate_age(new Date(getPersonInfoo.education[0].endDate))} year ago. My first experience was on {getPersonInfoo.experience[3].title2}. I worked on {getPersonInfoo.experience[3].description} at {getPersonInfoo.experience[3].title}. My second and more important internship was {date_formatter(getPersonInfoo.experience[2].startDate)}. {getPersonInfoo.experience[2].description}. Before I graduated from school, I took a {Object.keys(getPersonInfoo.skills[2])} programming course and learned {Object.keys(getPersonInfoo.skills[2])}. While I was still at school, I took the {getPersonInfoo.experience[1].title3} exam and I won. After that, I agreed with one of the proffesor at {getPersonInfoo.experience[1].title}. {getPersonInfoo.experience[1].description} in {getPersonInfoo.experience[1].country}.  At the same time, I actively used {Object.keys(getPersonInfoo.skills[8])} system. After that, I returned to my country and took the {getPersonInfoo.certificates[0].description} course opened by {getPersonInfoo.certificates[0].title}, and at the same time I tried to improve my algorithm skills from platforms such as Hacker-rank, after which I started to work as a web developer at {getPersonInfoo.experience[0].title} company and still work in this company especially in {Object.keys(getPersonInfoo.skills[2])}. I am continuing my work on it. These are my experiences in general.</p>

                            <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Home;