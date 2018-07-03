import React, { Component } from 'react';
import CampaignForm from './CampaignForm';
import './App.css';

class App extends Component {
  state = {
    nextCampaignId: 0,
    campaigns: [],
  }
  renderCampaignList = () => {
    return this.state.campaigns.map(campaign => (<li>{campaign.partyName}</li>));
  }
  addNewCampaign = (aCampaign) => {
    const campaigns = this.state.campaigns;
    const newCampaign = {
      ...aCampaign,
      id: this.state.nextCampaignId,
    }
    this.setState({
      campaigns: [...campaigns, newCampaign],
      nextCampaignId: this.state.nextCampaignId + 1,
    })
    return newCampaign;
  }
  render() {
    return (
      <div className="App">
        <h1>Gloomtracker</h1>
        <ul>
          {this.renderCampaignList()}
        </ul>
        <CampaignForm onSave={this.addNewCampaign} campaign={null}/>
      </div>
    );
  }
}

export default App;
