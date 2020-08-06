import React from 'react';

import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";

import Intro from "../../container/intro/Intro";
import TalkerList from "../../Type1/TalkerList";
import Guest from "../../container/guest/index";
import StartManager from "../../container/guest/projectManager/StartManager";


function Body(props) {
    return (
        <Container maxWidth="lg">
        <div>
            <Container>

                <Route exact path="/" component={Intro} /> {/* 인트로화면 */}
                <Route exact path="/guest" component={Guest} /> {/*메인화면*/}
                <Route exact path="/guest/start" component={StartManager} /> {/*메인화면*/}
                <Route exact path="/main" component={TalkerList} /> {/*메인화면*/}



            </Container>
        </div>
        </Container>

    );
}

export default Body;