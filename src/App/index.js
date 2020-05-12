import React, { Component, Fragment } from 'react';
import './style.css';
 
class App extends Component{
    constructor(){
        super();
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
        <div className="">
            <TopBar/>
        </div>
    )
}
const TopBar = ()=>(
    <div className="tws-topbar tws-theme-bar tws-container">
            <TlxBox pos="left">
                <TlxBtn btnName="File" title="File" icon="ellipsis-v"/>
                <TlxBtn btnName="Tools" title="Tools" icon="wrench"/>
                <TlxBtn btnName="Schedule" title="Schedule" icon="list"/>
            </TlxBox>
            <small className="tws-center"><i className="tws-icon tws-logo"/>TrueWorship</small>
            <TlxBox pos="right">
                <TlxBtn btnName="D.Free" title="Distraction Free Mode" icon="columns"/>
                <TlxBtn btnName="Full Screen" title="Full Screen Mode" icon="arrows-alt-v tws-rot-45"/>
            </TlxBox>
    </div>
);
const TlxBox = ({pos, children})=>(
    <div className={`tws-tlx-box w3-card tws-${pos}`}>
        {children}
    </div>
);

const TlxBtn =({btnName,icon,title})=>(
    <>
        <button className="tws-btn" title={title}>
            <i className={`tws-tlx-btn-icon fa fa-${icon}`}/>{' '}
            <span className="tws-tlx-btn-name">{btnName}</span>
        </button>
    </>
);
export default App;
