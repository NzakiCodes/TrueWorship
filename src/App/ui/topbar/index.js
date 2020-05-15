import React from 'react'
import PropTypes from 'prop-types'

const TopBar = props => {
    return (
        <div className="tws-topbar tws-theme-bar tws-container">
            <TlxBox pos="left">
                <TlxBtn btnName="File" title="File" icon="ellipsis-v"/>
                <TlxBtn btnName="Tools" title="Tools" icon="wrench"/>
                <TlxBtn btnName="Schedule" title="Schedule" icon="list"/>
            </TlxBox>
            <AppName appname="TrueWorship"/>
            <TlxBox pos="right">
                <TlxBtn btnName="D.Free" title="Distraction Free Mode" icon="columns"/>
                <TlxBtn btnName="Full Screen" title="Full Screen Mode" icon="arrows-alt-v tws-rot-45"/>
            </TlxBox>
        </div>
    )
}


const TlxBox = ({pos, children})=>(
    <div className={`tws-tlx-box tws-${pos}`}>
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


const AppName = ({appname})=>(
    <small className="tws-center"><i className="tws-icon tws-logo"/>{appname}</small>
);

TlxBox.propTypes = {
    pos:PropTypes.string.isRequired,
    children:PropTypes.object
}
TlxBtn.propTypes = {
    btnName:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}
AppName.propTypes = {
    appname: PropTypes.string.isRequired
}
TopBar.propTypes = {

}

export default TopBar
