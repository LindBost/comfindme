import React from 'react'

export const PresentationCard = (props) => {
    const { employeeName, teamName, organisationName, floor } = props.result

    const handleSetSelectedUser = () => {
        props.setSelectedUser(props.result)
    }

    return (
        <div onClick={handleSetSelectedUser}>
            <p>{employeeName}</p>
            <p>{teamName}</p>
            <p>{organisationName}</p>
        </div>
    );
}


