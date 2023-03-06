import Ref from "../Ref/Ref";
import './Notes.css';

import austria from "../../img/austria.jpg";
import poland from "../../img/poland.jpg";
import germany from "../../img/germany.jpg";
import slovenia from "../../img/slovenia.jpg";
import norway from "../../img/Norway.jpg";

const Notes = props => {
  
  const placeholder = "f.e 18.0";
  
  const onNotesChangeHandler = (data, id) => {
      props.onNoteChange(data, id);
  };
  
  return (
    <div className="all_refs-container">
          <Ref
            srcImage={austria}
            placeholder={placeholder}
            id="0"
            onNotesChange={onNotesChangeHandler}
          ></Ref>
          <Ref
            srcImage={poland}
            placeholder={placeholder}
            id="1"
            onNotesChange={onNotesChangeHandler}
          ></Ref>
          <Ref
            srcImage={germany}
            placeholder={placeholder}
            id="2"
            onNotesChange={onNotesChangeHandler}
          ></Ref>
          <Ref
            srcImage={slovenia}
            placeholder={placeholder}
            id="3"
            onNotesChange={onNotesChangeHandler}
          ></Ref>
          <Ref
            srcImage={norway}
            placeholder={placeholder}
            id="4"
            onNotesChange={onNotesChangeHandler}
          ></Ref>
        </div>
  );
};

export default Notes;