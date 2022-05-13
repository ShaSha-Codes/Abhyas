import React from 'react';
import io from 'socket.io-client';

import './style.css';

class StudentBoard extends React.Component {

    timeout;
    socket = io.connect("http://localhost:5000" ,{ transports : ['websocket'] });

    ctx;
    isDrawing = false;

    constructor(props) {
        super(props);

        this.socket.on("canvas-data", function(data){

            var root = this;
            var interval = setInterval(function(){
                if(root.isDrawing) return;
                root.isDrawing = true;
                clearInterval(interval);
                var image = new Image();
                var canvas = document.querySelector('#board');
                var ctx = canvas.getContext('2d');
                image.onload = function() {
                    ctx.drawImage(image, 0, 0);

                    root.isDrawing = false;
                };
                image.src = data;
            }, 200)
        })
    }

    componentDidMount() {
        this.drawOnCanvas();
    }

    drawOnCanvas() {
        var canvas = document.querySelector('#board');
        this.ctx = canvas.getContext('2d');

        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));


     
    }
    
    

    render() {
        return (
            <div className="sketch" id="sketch">
                <canvas className="board" id="board"></canvas>
            </div>
        )
    }
}

export default StudentBoard