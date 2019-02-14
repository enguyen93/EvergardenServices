import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';

import MyNav from '../DashNav'
import Sidebar from '../DashSidebar'
import MainContent from '../DashMainContent'

class Dashboard extends Component {
  state = {
    // User
    userName: '',

    // Recipients
    Recipients: [],
    name: '',
    email: '',
    
    // Messages
    Messages: '',
    title: '',
    message: '',
    scheduleDate: ''
  }

  componentDidMount() {
    this.loadRecipients();
  }
  // loads all recipients of the current user to state
  loadRecipients = () => {
    API.getRecipients()
      .then(res => {
        console.log(res.data)
      
        this.setState({
          Recipients: res.data,
          name: ""
        })
      }
      )
      .catch(err => console.log(err));
      
  };

  loadMessages = (_id) => {
    API.getMessages(_id)
      .then(res => {
        console.log(res.data)
        this.setState({
          Messages: res.data,
          title:'',
          message: '',
          scheduleDate: ''
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Dashboard">
        <MyNav
          userName={this.state.userName}
        />
        <Sidebar
          Recipients={this.state.Recipients}
          name={this.state.name}
          email={this.state.email}
          getMessages={this.loadMessages}
        />
        {this.state.Messages && <MainContent
          Messages={this.state.Messages}
          title={this.state.title}
          body={this.state.message}
          date={this.state.scheduleDate}
          key={this.state.id}
        />}
      </div>
    );
  }
}

export default Dashboard;