import React, {useState} from 'react'
import { PresentationCard } from './PresentationCard';

export const PresentationList = (props) => {
    const [imgUrl, setImgUrl] = useState("");
    const [floor, setFloor] = useState(null);

    const setImage = (floor) => {
        setImgUrl(`../Plan${floor}.png`);
        setFloor(floor);
    }

    const cards = props.results.map((result, index) => {
        const object = {
            
            employeeName: result.name,
            teamName: result.team.teamName,
            organisationName: result.team.organisation.organisationName,
            floor: result.team.floor
        }
        return (<PresentationCard 
            setImage={setImage} 
            result={object} 
            key={index} 
            setSelectedUser={props.setSelectedUser}/>)
    })

    return(
        <div>
            {cards}
            {floor && <h5>Floor: {floor}</h5>}
        </div>
    );
}

