import React from "react";
import EpisodeCard from "./EpisodeCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLink = styled.h3`
    text-align: center;
    padding: 20px;
`;

const EpisodeList = props => {
    const { episode } = props;
    return (
        <div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
            <div className="cards">
                {episode.map(item => {
                    const { id, name, air_date, episode } = item
                    return <EpisodeCard key={id} name={name} air_date={`Aired on ${air_date}`} episode={`Episode #: ${episode}`} />
                })}
            </div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
};

export default EpisodeList;