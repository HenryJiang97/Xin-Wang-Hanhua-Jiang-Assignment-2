import React, {Component} from 'react';
import Grid from './Grid';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "input",
            width: 0,
            height: 0,
            frequency: 2000
        };

        this.handleClick = this.handleClick.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setFrequency = this.setFrequency.bind(this);
        this.handleReturnClick = this.handleReturnClick.bind(this);
    }

    handleClick() {
        this.setState({page: "grid"});
    }

    setWidth(evt) {
        this.setState({width: evt.target.value});
    }
    
    setHeight(evt) {
        this.setState({height: evt.target.value});
    }

    setFrequency(evt) {
        this.setState({frequency: evt.target.value});
    }

    refreshPage() {
        window.location.reload(false);
    }

    handleReturnClick() {
        this.setState({page: "input"});
    }

    handleRefreshClick() {
        this.setState({page: "input"});
        this.setState({page: "grid"});
    }

    render() {
        if (this.state.page === "input") {
            return (
                <div>
                    <h1>Conway’s History of Life</h1>
                    <h3>Grid dimension</h3>
                    <input placeholder='Height' onChange={this.setHeight}></input>
                    <input placeholder='Width' onChange={this.setWidth}></input>
                    <input placeholder='Frequency' onChange={this.setFrequency}></input>
                    <button onClick={this.handleClick}>Create Grid</button>
                    <p>Restriction: Dimension(10 x 10 to 100 x 100), Frequency(50ms to 2000ms)</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Conway’s History of Life</h1>
                    <Grid 
                        width={this.state.width}
                        height={this.state.height}
                        frequency={this.state.frequency}
                        return={()=>this.handleReturnClick()}
                        refresh={()=>this.handleRefreshClick()}
                    />
                </div>                
            );
        }
        
    }
}


export default Home;