// import React, { useEffect, useState } from "react";
//
// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect
//
//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);
//
//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }
import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLink = styled.h3`
    text-align: center;
    padding: 20px;
`;