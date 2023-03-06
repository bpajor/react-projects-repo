import { useState } from "react";

import "./Ref.css";

const Ref = (props) => {
  const [NoteValid, setNoteValid] = useState(true);

  const NoteValidation = (note) => {
    if (containsOnlyNotePattern(note) && note >= 0 && note <= 20) {
      setNoteValid(true);
      return true;
    }
    setNoteValid(false);
    return false;
  };

  const containsOnlyNotePattern = (value) => {
    return /^[0-9]+(\.[05])?$/.test(value);
  };

  const onInputChangleHandler = (event) => {
    if(NoteValidation(event.target.value)) {
      props.onNotesChange(event.target.value, props.id);
      return;
    }
    props.onNotesChange('', props.id);
  };

  return (
    <div className="ref-container">
      <img src={props.srcImage} alt="Gówno" height="25" width="25"></img>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={onInputChangleHandler}
        style={{ backgroundColor: NoteValid ? "white" : "red" }}
      ></input>
    </div>
  );
};

export default Ref;
