import React, { Component, Fragment, Suspense } from 'react';
import './style.css';
import TopBar from './ui/topbar';
import PropTypes from 'prop-types';
import { fileItems, toolItems } from './sidebarItem.list';
import SideBar from './ui/sidebar';

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
        <Suspense fallback={<h1>Loading..</h1>}>
            <img src="assets/images/TrueWorshipLogo.png" alt="TrueWorship Logo"/>
        </Suspense>
        
        <div class="loader"></div>
    </div>
);

function MainApp(){
    return(
        <>
            <TopBar/>
            <AppBody/>
        </>
        )
}
const AppBody =({bodyState})=>{
    return(
        <div className={`tws-body-${bodyState}`} id="tws-body">
           <SideBar fileItems={fileItems} toolItems={toolItems}/>
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
