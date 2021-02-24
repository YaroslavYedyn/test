import './App.css';
import {Routes} from "./containers/router";
import {Header} from "./containers/header";
import {Footer} from "./containers/footer";

function App() {
    return (
        <div>
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default App;
