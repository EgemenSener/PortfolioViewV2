import { getPersonInfo } from '../routes/routes.js';
import About from './aboutAndService.js';
import Certificates from './certificates.js';
import Education from './education.js';
import Home from './home.js';
import Example from './navbar.js';

const getPersonInfoo = await getPersonInfo()

function Main() {
    return (
        <div>
            <Example />
            <Home getPersonInfo={getPersonInfoo} />
            <About getPersonInfo={getPersonInfoo} />
            <Education getPersonInfo={getPersonInfoo} />
            <Certificates getPersonInfo={getPersonInfoo} />
        </div>
    )
}

export default Main;
