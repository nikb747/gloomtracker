import React, { Component } from 'react';

class CampaignForm extends Component {
    handleSave = () => {
        this.props.onSave({
            partyName: this.partyNameInput.value,
        });
    }
    render() {
      return (
        <div>
            {this.props.campaign ? <h1>Edit Campaign</h1> : <h1>New Campaign</h1>}
            Party Name: <input type="text" ref={r => this.partyNameInput = r} />
            <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }
  }
  
  export default CampaignForm;
  