import React, { Component, Fragment } from 'react';
import './style.css';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import { fileItems } from './sidebarItem.list';

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
            <AppBody/>
        </>
        )
}
const AppBody =({bodyState})=>{
    return(
        <div className={`tws-body-${bodyState}`} id="tws-body">
           <SideBar/>
        </div>
    )
}
const SideBar = ()=>(
    <div className="tws-body-side">
        <SBTabs tabtitle="File" items={fileItems}/>
    </div>
);

const SBTabs = ({tabtitle,items})=> {
    return(
        <div>
            <span className="tws-tabtitle tws-theme-text ">{tabtitle}</span>
            <TabList items={items}/>
        </div>
    )
}
const TabList =({items})=>(
    <ul>
        {
            items.map((item)=>(
                <TabListItem key={item.id} item={item} />
            ))
        }
    </ul>
);
const TabListItem = ({item})=>{
    const { image, title } = item;

    return(
            <li className=" w3-border-top w3-border-bottom w3-border-gray">
                <span className="w3-row">
                    <span className="w3-col s4 m4 l2">
                        <img src={image} className="w3-image" alt={image}/>
                    </span>
                    <span className="w3-col s8 m8 l10">
                        <span> {title} </span>
                    </span>
                    
                </span>
            </li>
        )
    };
    // PropTypes & Default Props
SBTabs.propTypes = {
    tabtitle:PropTypes.object.isRequired,
    items:PropTypes.object.isRequired
}
TabListItem.propTypes = {
    item:PropTypes.object.isRequired
}
TabList.propTypes = {
    items:PropTypes.object.isRequired
}
AppBody.defaultProps = {
    bodyState:"open"
}
AppBody.propTypes = {
    bodyState:PropTypes.string.isRequired
}
export default App;
