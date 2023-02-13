import { getPersonInfo } from '../routes/routes.js';
const getPersonInfoo = await getPersonInfo()

//Home and description about my life

function About(props) {

     return(
          <div>
               <p>${getPersonInfoo.personalInfo}</p>
               <p>${getPersonInfoo.personalInfo2}</p>
          </div>
     )
}

export default About;

getPersonInfoo.skills.forEach(element => {
    document.getElementById("skills").innerHTML += `                                   
<strong>${Object.keys(element)}</strong>
<span
     class="color-white pull-right">${Object.values(element)}</span>
<div class="progress">
     <div class="progress-bar progress-bar-primary" role="progressbar"
          aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: ${Object.values(element)};"></div>
</div>`
});

document.getElementById("service").innerHTML += `          
<div class="container">
<div class="row">
    <div class="bg-dark col-md-3 col-sm-6">
          <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
               <i class="fa fa-table"></i>
               <h3>${Object.keys(getPersonInfoo.field[0])}</h3>
               <p class="color-white">${Object.values(getPersonInfoo.field[0])}</p>
          </div>
     </div>

     <div class="bg-white col-md-3 col-sm-6">
          <div class="wow fadeInUp service-thumb" data-wow-delay="1.8s">
               <i class="fa fa-html5"></i>
               <h3>${Object.keys(getPersonInfoo.field[1])}</h3>
               <p>${Object.values(getPersonInfoo.field[1])}</p>
          </div>
     </div>

</div>
</div>`


