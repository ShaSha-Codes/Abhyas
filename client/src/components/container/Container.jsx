import React from 'react';
import Board from '../board/Board';
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
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 1 </option>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>

                    <div className="brushsize-container"    >
                        <Button variant='contained' onClick={this.changeColor.bind(this)} value="#ffffff">Eraser</Button>
                    </div>

                    <div className="brushsize-container"    >
                        <Button variant='contained' onClick={this.clearCanvas}>Clear Board</Button>
                    </div>

                </div>

                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size} ></Board>
                </div>
            </div>
        )
    }
}

export default Container