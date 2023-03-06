import './JumpItem.css'

const JumpItem = props => {
    return (
        <li>
            {/* <div className="whole-banner"> */}
                <ul className='JumpItem-container'>
                  <li className='place-container'>{props.place}</li>
                  <li className='name-container'>{props.jumper}</li>
                  <li className='meters-container'>{props.meters + " m"}</li>
                  <li className='points-container'>{props.points + "pkt"}</li>
                </ul>
            {/* </div> */}
        </li>
    );
};

export default JumpItem;