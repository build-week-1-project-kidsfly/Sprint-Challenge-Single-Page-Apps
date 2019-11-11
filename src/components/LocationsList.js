import React from "react";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLink = styled.h3`
    text-align: center;
    padding: 20px;
`;

const LocationList = props => {
    const { location } = props;
    return (
        <div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
            <div className="cards">
                {location.map(item => {
                    const { id, name, type, dimension } = item;
                    return <LocationCard key={id} name={name} type={type} dimension={dimension} />
                })}
            </div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
};

export default LocationList;