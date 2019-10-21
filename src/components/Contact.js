import React from 'react';
import './contact.css';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isConnected : false}; 
    }
      
    render() {
        return (
            <div className="Contact">
                <img className ="avatar" src={this.props.avatar} alt={`avatar of ${this.props.name}`}/>
                    <div>                        
                        <p className="name">{this.props.name}</p>
                    <div onClick = {event => {
                        const newState = !this.state.isConnected;
                        this.setState ({isConnected : newState})}}
                        className="status">
                        <div className={this.state.isConnected ? "status-online" : "status-offline"}>
                        </div>
                        <p className="status-text">{this.state.isConnected ? "Online" : "Offline"}</p>
                    
                        </div>
                    </div>
            </div>
        );
    }
}

export default Contact;

