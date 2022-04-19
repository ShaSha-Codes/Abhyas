import React from 'react';
import StudentBoard from '../studentBoard/StudentBoard';
import Button from "@mui/material/Button";

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
    
    clearCanvas() {
        var root = this;
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var base64ImageData = canvas.toDataURL("image/png");
        root.socket.emit("canvas-data", base64ImageData);
    }

    render() {

        return (
            <div className="container-board">
                <div className="tools-section">
                <div className="brushsize-container"    >
                        <Button variant='contained' onClick={this.clearCanvas}>Clear Board</Button>
                    </div>
                </div>
                <div className="board-container">
                    <StudentBoard color={this.state.color} size={this.state.size}></StudentBoard>
                </div>
            </div>
        )
    }
}

export default Container