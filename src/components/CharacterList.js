import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLink = styled.h3`
    text-align: center;
    padding: 20px;
`;

const CharacterList = props => {
    const { character } = props;
    return (
        <div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
            <div className="cards">
                {character.map(item => {
                    const { id, image, name, species, status } = item;
                    return <CharacterCard key={id} img={image} name={name} species={species} status={status} />
                })}
            </div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
};

export default CharacterList;