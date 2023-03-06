import React, { useState } from "react";
import CustomLabel from "../CustomLabel/CustomLabel";
import Notes from "../Notes/Notes";

import Ref from "../Ref/Ref";

import austria from "../../img/austria.jpg";
import poland from "../../img/poland.jpg";
import germany from "../../img/germany.jpg";
import slovenia from "../../img/slovenia.jpg";
import norway from "../../img/Norway.jpg";

import "./SkiJumperForm.css";

const SkiJumperForm = (props) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const placeholder = "f.e 18.0";
  const jumpData = {};
  const [RefNotes, setRefNotes] = useState(["", "", "", "", ""]);

  const [JumperData, setJumperData] = useState("");
  const [Meters, setMeters] = useState("");
  const [Wind, setWind] = useState("");

  const [JumperDataValidation, setJumperDataValidation] = useState(true);
  const [MetersValidation, setMetersValidation] = useState(true);
  const [WindValidation, setWindValidation] = useState(true);

  const onJumperDataChangeHandler = (event) => {
    if (containsOnlyLettersOrSpace(event.target.value)) {
      setJumperData(event.target.value);
      setJumperDataValidation(true);
      return;
    }
    setJumperDataValidation(false);
  };

  const onMetersChangeHandler = (event) => {
    if (
      containsOnlyMetersPattern(event.target.value) &&
      parseFloat(event.target.value) < 150.5
    ) {
      setMeters(event.target.value);
      setMetersValidation(true);
      return;
    }
    setMetersValidation(false);
  };

  const onWindChangeHandler = (event) => {
    if (
      containsOnlyWindPattern(event.target.value) &&
      parseFloat(event.target.value) < 30.1 && parseFloat(event.target.value) > -30.1
    ) {
      setWind(event.target.value);
      setWindValidation(true);
      return;
    }
    setWindValidation(false);
  };

  const onRefNotesChangeHandler = (note, id) => {
    setRefNotes((prevRefNotes) => {
      let RefsNotes = [...prevRefNotes];
      RefsNotes[id] = note;
      return RefsNotes;
    });
  };

  const notesContainsOnlyNotesPattern = (notes) => {
    if (notes.includes("")) {
      return false;
    }
    return true;
  };

  const containsOnlyLettersOrSpace = (value) => {
    return /^[a-zA-Z\s]+$/.test(value);
  };

  const containsOnlyMetersPattern = (value) => {
    return /^[0-9]+(\.[05])?$/.test(value);
  };

  const containsOnlyWindPattern = (value) => {
    return /^[+\-]?\d+(\.\d{1})?$/.test(value);
  };

  const onSubmitChangeHandler = (event) => {
    event.preventDefault();

    if (
      notesContainsOnlyNotesPattern(RefNotes) &&
      JumperDataValidation &&
      MetersValidation &&
      WindValidation
    ) {
      jumpData.jumperData = JumperData;
      jumpData.meters = Meters;
      jumpData.wind = Wind;
      jumpData.notes = RefNotes;

      const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
      const randomNumber = Math.floor(Math.random() * 1000);
      const result = letter + randomNumber;

      jumpData.id = result;
      props.onSubmit(jumpData);
    }
  };

  return (
    <form onSubmit={onSubmitChangeHandler}>
      <div className="upper-container">
        <div className="nested-container">
          <CustomLabel>Type Jumper's data</CustomLabel>
          <input
            type="text"
            placeholder="f.e Jan Kowalski"
            onChange={onJumperDataChangeHandler}
            style={{ backgroundColor: JumperDataValidation ? "white" : "red" }}
          ></input>
        </div>
        <div className="nested-container">
          <CustomLabel>Type meters</CustomLabel>
          <input
            type="text"
            placeholder="f.e 130m"
            onChange={onMetersChangeHandler}
            style={{ backgroundColor: MetersValidation ? "white" : "red" }}
          ></input>
        </div>
        <div className="nested-container">
          <CustomLabel>Type wind</CustomLabel>
          <input
            type="text"
            placeholder="f.e +5.3"
            onChange={onWindChangeHandler}
            style={{ backgroundColor: WindValidation ? "white" : "red" }}
          ></input>
        </div>
      </div>
      <div className="middle-container">
        <CustomLabel>Type notes from referees</CustomLabel>
      </div>
      <div className="bottom-container">
        {" "}
        {/*here*/}
        <Notes onNoteChange={onRefNotesChangeHandler}></Notes>
        <div className="button-container">
          <button type="submit">Add New Jumper</button>
        </div>
      </div>
    </form>
  );
};

export default SkiJumperForm;
