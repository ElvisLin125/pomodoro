import React from "react";

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalMin : 25,
            minutes: 25,
            seconds: 0,
            playback: false,
            timesCompleted: 0,
            timerType: "work"
        }
        this.changeTime = this.changeTime.bind(this);
        this.renderTime = this.renderTime.bind(this);
    }

    changeTime(time) {
        var type = this.state.timerType;
        if (time === 25) {
            type = "work";
        } else if (type === 15) {
            type = "long";
        } else if (type === 5) {
            type = "short";
        }

        this.setState({totalMin: time, minutes: time, seconds: 0, timerType: type, playback: false});
        clearInterval(this.interval);
    }

    renderTime() {
        var formatSeconds;
        if (this.state.seconds < 10) {
            formatSeconds = ("0" + this.state.seconds).slice(-2);
        } else {
            formatSeconds = this.state.seconds;
        }
        return <span>{("0" + this.state.minutes).slice(-2)}:{formatSeconds}</span>;
    }

    handleTime() {
        var minutes = this.state.minutes;
        var seconds = this.state.seconds;
        var timesCompleted = this.state.timesCompleted;

        if (seconds > 0) {
            seconds--;
        } else if (seconds === 0 && minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (seconds === 0 && minutes === 0) {
            clearInterval(this.interval);
            if (this.state.timerType === "work") {
                timesCompleted++;
            }
            alert("TIME'S UP")
        }

        this.setState({minutes: minutes, seconds: seconds, timesCompleted: timesCompleted});
    }

    controlPlayback(func) {
        if (func === "start" && this.state.playback === false) {
            console.log('play');
            this.interval = setInterval(() => {
                this.handleTime()
            }, 1000);
            this.setState({playback: true});
        } else if (func === "pause") {
            console.log('pause');
            clearInterval(this.interval);
            this.setState({playback: false});
        } else if (func === "restart") {
            console.log('restart');
            this.changeTime(this.state.totalMin);
            this.interval = setInterval(() => {
                this.handleTime()
            }, 1000);
            this.setState({playback: true});
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="modesContainer">
                    <button className="timerMode" onClick={() => this.changeTime(25)}>Work</button>
                    <button className="timerMode" onClick={() => this.changeTime(5)}>Short Break</button>
                    <button className="timerMode" onClick={() => this.changeTime(15)}>Long Break</button>
                </div>
                
                <div className="time" >{this.renderTime()}</div>
                <div className="playbackContainer">
                    <button className="playback" onClick={() => this.controlPlayback("start")}>Start</button>
                    <button className="playback" onClick={() => this.controlPlayback("pause")}>Pause</button>
                    <button className="playback" onClick={() => this.controlPlayback("restart")}>Restart</button>
                </div>
                <div style={{fontSize: "20px", marginTop: "20px"}}>Work Sessions Completed: {this.state.timesCompleted}</div>
            </div>
        );
    }


}

export default Timer;