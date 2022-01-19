import React, {useState} from 'react';

const Tabs = (props) => {
    console.log(props.tabsArray);
    const {tabsArray} = props;

    const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

    const handleTab = (idx) => {
        console.log(idx);
        setSelectedTab(tabsArray[idx]);
        console.log("selected tab:", selectedTab);
    }

    return (<div>
        {
            tabsArray.map( (each, idx) => {
                return(
                    <div key={idx} onClick={()=>handleTab(idx)} value={each.label} style={{display: "inline-block", margin: "20px", padding: "10px", border: "black solid 2px"}}>{each.label}</div>
                )
            })
        }

        {
            <div style={{border: "black solid 2px"}}>
                <p>{selectedTab.content}</p>
            </div>
        }


    </div>);
};

export default Tabs;
