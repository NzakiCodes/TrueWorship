import React, { Component, Fragment } from 'react';
import './style.css';
import TopBar from './TopBar';
import PropTypes from 'prop-types';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            afterSplashText:<MainApp/>,
            controlOpt:<SplashScreen/>
        }
        
    }
    splashTimer(){
        // eslint-disable-next-line 
        this.splashTimerId = setTimeout(() => {
            this.setState({controlOpt:<MainApp/>});
        }, 2000);
    }
    componentDidMount(){
        this.splashTimer();
    }
    componentWillUnmount(){
        window.clearTimeout(this.splashTimerId)
    }
    render(){
        return (
            <Fragment>
                {this.state.controlOpt}
            </Fragment>
        )
    }
}

// Splash Screen Shows at Apllication's Startup for 3seconds then Fades Out.
const SplashScreen =() =>(
    <div className="SplashScreen">
        <img src="assets/images/TrueWorshipLogo.png" alt="TrueWorship Logo"/>
        <div class="loader"></div>
    </div>
);

function MainApp(){
    return(
        <>
            <TopBar/>
        </>
        )
}
const AppBody =({bodyState})=>{
    return(
        <div className={`tws-body-${bodyState}`} id="tws-body">
            <div className="tws-body-side">

            </div>
            </div>
    )
}


AppBody.defaultProps = {
    bodyState:"open"
}
AppBody.propTypes = {
    bodyState:PropTypes.string.isRequired
}
export default App;
