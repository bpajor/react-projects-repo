import React, { useState } from "react";
import SkiJumperForm from "./components/New Ski Jumper/SkiJumperForm";
import JumpersList from "./components/JumpersList/JumpersList";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

import "../src/App.css";

const App = () => {
  // let jumpers = [];

  const [jumpers, setJumpers] = useState([]);

  console.log(jumpers);

  const onFormSubmittedHandler = (data) => {
    const JumpPoints = calculateJumpPoints(data);
    data.jumpPoints = JumpPoints;
    console.log(data);
    let temp_jumpers = [];
    temp_jumpers = [...jumpers, data];
    temp_jumpers = sortJumpersArray(temp_jumpers);
    for (const jumper of temp_jumpers) {
      delete jumper.place;
    }

    let place = 1;
    let lastJumpPoints = temp_jumpers[0].jumpPoints;

    for (let i = 0; i < temp_jumpers.length; i++) {
      if (temp_jumpers[i].jumpPoints < lastJumpPoints) {
        place = i + 1;
      }

      temp_jumpers[i].place = place;

      lastJumpPoints = temp_jumpers[i].jumpPoints;
    }

    console.log(temp_jumpers);
    setJumpers(temp_jumpers);
  };

  const calculateJumpPoints = (data) => {
    const referenceDist = 130;
    let referencePoints = 60;
    referencePoints += (parseFloat(data.meters) - referenceDist) * 1.8;
    referencePoints += parseFloat(data.wind);

    data.notes = data.notes.map((num) => parseFloat(num));
    data.notes = data.notes.sort((a, b) => b - a);
    const three_notes = data.notes.slice(1, 4);

    for (const item of three_notes) {
      referencePoints += item;
    }

    return referencePoints;
  };

  const sortJumpersArray = (JumpersArray) => {
    JumpersArray.sort((a, b) => {
      return b.jumpPoints - a.jumpPoints;
    });
    return JumpersArray;
  };

  let content = <p class="p-container">No results found</p>;

  if (jumpers.length > 0) {
    content = <JumpersList jumpsData={jumpers}></JumpersList>;
  }

  return (
    <div className="all">
      <LeftSidebar></LeftSidebar>
      <div className="top-container">
        <SkiJumperForm onSubmit={onFormSubmittedHandler}></SkiJumperForm>
      </div>
      <div className="down-container">{content}</div>
    </div>
  );
};

export default App;
