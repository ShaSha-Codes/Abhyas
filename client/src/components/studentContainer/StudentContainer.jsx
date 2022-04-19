import React from 'react';
import StudentBoard from '../studentBoard/StudentBoard';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <div className="container-board">
                <div className="board-container">
                    <StudentBoard color={this.state.color} size={this.state.size}></StudentBoard>
                </div>
            </div>
        )
    }
}

export default Container