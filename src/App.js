import React from "react";

// Components
import CuisineComponent from "./components/cuisine-component/CuisineComponent";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//import colibri from "./assets/images/white.gif";

function App() {

    const [ section, setSection ] = React.useState('landing');

    const handleSection = (section_type) => {
        setSection(section_type);
    }

    return (
        <div className="App">
            { section === 'landing' &&
                <div className="LandingContainer">
                    <div className="LandingContainerTitle">El Colibri</div>
                    <div className="LandingContainerSubtitle">Casa estancia & Mesa rural</div>
                    <div className="LandingContainerSections">
                        <div className="LandingContainerSection" onClick={() => {handleSection('hosting')}}>
                            <div className="LandingContainerSectionText">Casa estancia</div>
                        </div>
                        <div className="LandingContainerSection" onClick={() => {handleSection('cuisine')}}>
                            <div className="LandingContainerSectionText">Mesa rural</div>
                        </div>
                    </div>
                </div>
            }
            { section === 'hosting' && 
                <div onClick={() => {handleSection('landing')}}
                >back</div>
            }
            { section === 'cuisine' && 
                <CuisineComponent 
                    handleSection={(section_type) => {handleSection(section_type)}}
                />
            }
        </div>
    );
}

export default App;
