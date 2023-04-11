import FirstComponent from "./FirstComponent"
import SecondComponent from "./SecondComponent"
import ThirdComponent from "./ThirdComponent"
import FourthComponent from "./FourthComponent"
import CreatingPerson from "./CreatingPerson"
import {SecondaryComponent} from "./FirstComponent"

function WrapComponent(){
    return (
        <div className="App">
            To Do Application
            <div><FirstComponent></FirstComponent></div>
            <div><SecondComponent></SecondComponent></div>
            <div><ThirdComponent></ThirdComponent></div>
            <div><FourthComponent></FourthComponent></div>
            <div><CreatingPerson/></div>
            <div><SecondaryComponent/></div>
        </div>
    )
}

export default WrapComponent