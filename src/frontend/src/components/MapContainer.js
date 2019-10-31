import React from 'react';
import { Info } from './Info';
import { Map } from './Map';

export const MapContainer = (props) => {
    return(
        <div className="mapContainer">
            <Info selectedUser={props.selectedUser} />
            <Map floor={props.selectedUser.floor}/>
        </div>
    )
}