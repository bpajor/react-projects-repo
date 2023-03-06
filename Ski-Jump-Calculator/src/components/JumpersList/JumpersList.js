import JumpItem from "../JumpItem/JumpItem";
import './JumpersList.css';

const JumpersList = props => {
    
    return(<ul className="JumpersList-container">
       {props.jumpsData.map(jump => (
         <JumpItem key={jump.id} jumper={jump.jumperData} place={jump.place} meters ={jump.meters} points={jump.jumpPoints}></JumpItem>
       ))}
    </ul>);
};

export default JumpersList;