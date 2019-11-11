import React from "react";
import { Card } from "semantic-ui-react";

const LocationCard = props => {
  const { name, type, dimension } = props;
  return (
      <Card header={name} meta={type} description={dimension} />
  );
};

export default LocationCard;