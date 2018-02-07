import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addChoice=this.addChoice.bind(this)
    this.saveChanges=this.saveChanges.bind(this)
    this.cancelInput=this.cancelInput.bind(this)
    this.state={
      label:"",
      defaultValue:"",
      choices: [
        "Choices" ,
      ],
      value: "",
    };
    
  }

  handleChangeLabel = event => {
		this.setState({ label: event.target.value });
  };
  
  handleChangeType = event => {
		this.setState({ type: event.target.value });
  }; 
  
  handleChangeDefaultValue = event => {
		this.setState({ defaultValue: event.target.value });
  };
  
  handleChangeChoices = event => {
		this.setState({ value: event.target.value });
  };

  addChoice(){
    this.state.choices.push(this.state.value);
    this.setState({choices: this.state.choices});
    this.setState({value: ""})
  };
  saveChanges(){
    this.state.choices.push(this.state.value);

    this.setState({defaultValue: this.state.value});
    this.setState({choices: this.state.choices});
    this.setState({label: this.state.label});
    this.setState({value: ""});
  };

  cancelInput(){
    this.setState({
      label:"",
      defaultValue:"",
      choices:"",
    
    });
  
  };
    
  
  render() {
  
		const choices = this.state.choices.map((choice, idx) => {
			return (
          	<option key={idx}>{choice}</option>
			
			);
    });
    
      return (
        <div className="appBox">
            <h1>Field Builder</h1>
            <form>
                <div className="label">
                    <h5>Label</h5>
                    <input
                        type="text"
                        name="task"
                        placeholder="Label"
                        size="20"
                        value={this.state.label}
                        onChange={this.handleChangeLabel}
                      
                    />
                </div>
                <div className="type">
                    <h5>Type</h5>
                    <input 
                      type="checkbox"
                      id="requiredValue"
                      name="checkbox"
                      size="20"
                    />
                    <label htmlFor="requiredValue">A value is required</label>
                </div>
                <div className="defaultValue">
                <h5>Default Value</h5>
                <input
                    type="text"
                    name="default value"
                    placeholder="Default value"
                    size = "15"
                    value={this.state.defaultValue}
                    onChange={this.handleChangeDefaultValue}
                />   
                </div>
               
                <div className="addChoice">
                <input 
                   type="text"
                   name="choice"
                   placeholder="Add choice"
                   size = "15"
                   value={this.state.value}
                   onChange={this.handleChangeChoices}   
                />
                <button type = "button" onClick={this.addChoice}>Add Choice</button>
                </div>
                <div className="value">
                    <select>
                      {choices}
                    </select>
                </div>
                
            </form>
            <br />
           <button id="saveChanges" onClick={this.saveChanges}>Save Changes</button>
            
            <button id="cancelButton" onClick={this.cancelInput}>Cancel</button>
        </div>
        )
      }

      }
      export default App;
