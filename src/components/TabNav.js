import React from "react";
import { Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

const panes = [
    { menuitem: 'Home Page', render: () =>
        <Tab.Pane>
            <h1 className="main-title">Welcome to the ultimate fan site!</h1>
            <br/>
            <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/1.jpeg" alt="Home-pic" />
        </Tab.Pane> },
    { menuitem: 'Characters', render: () =>
        <Tab.Pane>
            <Link className="">Enter Characters</Link>
            <br/>
            <img/>
        </Tab.Pane> },
];

const TabExampleBasic =() => <Tab panes={panes} />

export default TabExampleBasic;