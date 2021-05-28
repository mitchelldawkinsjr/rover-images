import React from 'react';
import RoverList from './roverlist';

export default class Rover extends React.Component{
    state = {
        rovers: []
    };

    render() {
        return (
            <RoverList />
        )
    }
}