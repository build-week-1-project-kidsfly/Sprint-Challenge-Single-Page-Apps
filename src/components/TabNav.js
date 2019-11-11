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
            <Link className="charac-title" to="/characters">Enter Characters</Link>
            <br/>
            <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/2.jpeg" alt="location-pic" />
        </Tab.Pane> },
    { menuitem: 'Locations', render: () =>
        <Tab.Pane>
            <Link className="charac-title" to="/location">Enter Locations</Link>
            <br/>
            <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/3.jpeg" />
        </Tab.Pane> },
    { menuitem: 'Episodes', render: () => <Tab.Pane>
            <Link className="charac-title" to="/episode">Enter Episodes</Link>
            <br/>
            <img className="main-pic" src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" />
        </Tab.Pane> },
];

const TabExampleBasic =() => <Tab panes={panes} />

export default TabExampleBasic;