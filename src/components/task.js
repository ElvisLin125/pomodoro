import React from "react";

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            completed: false,
            taskName: "",
            checked: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeProgress = this.changeProgress.bind(this);
    }


    changeProgress() {
        if (this.state.completed === false) {
            if (this.state.progress <= 99) {
                this.setState({progress: this.state.progress + 1});
            } else if (this.state.progress === 100) {
                clearInterval(this.interval);
                this.setState({completed:true});
            }
        } else {
            if (this.state.progress >= 0) {
                this.setState({progress: this.state.progress - 1});
            } else if (this.state.progress === -1) {
                clearInterval(this.interval);
                this.setState({completed:false});
            }
        }

    }

    handleInputChange(event) {
        this.interval = setInterval(this.changeProgress, 1);;
    }

    render() {
        return (
            <div className="container">
                <input
                    className="check"
                    type="checkbox"
                    checked={this.state.completed}
                    onChange = {this.handleInputChange}
                />
                <div className="bar" contentEditable> 
                    <p className="task">Do Homework</p>
                    <div className="progress" style={{width: this.state.progress + '%'}}></div>
                </div>
            </div>
        );
    }
}

export default Task;