import { getPersonInfo } from '../routes/routes.js';
import Home from './home.js';
import Example from './navbar.js';

const getPersonInfoo = await getPersonInfo()

function Main(){
    return(
        <div>
            <Example/>
            <Home getPersonInfo={getPersonInfoo}/>
        </div>
    )
}

export default Main;
