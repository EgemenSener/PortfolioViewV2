import { getPersonInfo } from '../routes/routes.js';
import About from './aboutAndService.js';
import Home from './home.js';
import Example from './navbar.js';

const getPersonInfoo = await getPersonInfo()

function Main(){
    return(
        <div>
            <Example/>
            <Home getPersonInfo={getPersonInfoo}/>
            <About getPersonInfo={getPersonInfoo} />
        </div>
    )
}

export default Main;
