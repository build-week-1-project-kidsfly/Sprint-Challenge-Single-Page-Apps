import React from "react";
import { Card } from "semantic-ui-react";

const EpisodeCard = props => {
    const { name, air_date, episode } = props;
    return (
        <Card header={name} meta={air_date} description={episode} />
    );
};

export default EpisodeCard;