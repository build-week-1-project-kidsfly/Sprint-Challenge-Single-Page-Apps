// import React from "react";
//
// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }
import React from "react";
import { Card } from "semantic-ui-react";

// const CardExampleCardProps = props => {
const CharacterCard = props => {
    const { img, name, species, status } = props;
    return (
        <Card image={img} header={name} meta={species} description={status} />
    );
};

export default CharacterCard;