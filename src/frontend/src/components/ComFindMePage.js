import React, {useState} from 'react';
import Search from './Search';
import { MapContainer } from './MapContainer';

export const ComFindMePage = () => {
    const [selectedUser, setSelectedUser] = useState({});
    console.log(selectedUser);
    return(
        <div className="pageContainer">
            <Search setSelectedUser={setSelectedUser} />
            <MapContainer selectedUser={selectedUser}/>
        </div>
    )
}