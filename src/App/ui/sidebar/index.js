import React from 'react';
import PropTypes from 'prop-types';


 const SideBar = ({fileItems,toolItems})=>(
    <div className="tws-body-side">
        <SBTabs tabtitle="File" items={fileItems}/>
        <SBTabs tabtitle="Tools" items={toolItems}/>
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
    console.log(image)

    return(
            <li className=" w3-border-top w3-border-bottom w3-border-gray">
                <span className="w3-row">
                    <span className="w3-col s4 m4 l2">
                        <img src={`assets/${image}`} className="w3-image" alt="{image}"/>
                    </span>
                    {console.log(image)}
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

export default  SideBar