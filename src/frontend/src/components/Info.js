import React from 'react';

export const Info = (props) => {
    return (
        <div>
            <p>{props.selectedUser.employeeName}</p>
            <p>{props.selectedUser.teamName}</p>
            <p>{props.selectedUser.organisationName}</p>
            {props.selectedUser.floor && <h4>Floor: {props.selectedUser.floor}</h4>}
        </div>
    )
}