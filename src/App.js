import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Profile from "./pages/Profile";
import EditProfile from "./components/EditProfile";

import UserTopicDetails from "./components/UserTopicDetails";
import Search from "./components/Search";
import MyTopics from "./pages/MyTopics";
import MyComments from "./pages/MyComments";
import TopicDetails from "./components/TopicDetails.js";
import Favorites from "./pages/Favorites";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import NewTopic from "./pages/NewTopic";
import topicService from "./lib/topic-service";

class App extends Component {
  state = {
    topicsArr: [],
    showNav: false,
    search: ""
  };

  // updateSearch = (e) => {
  //   const query = e.target.value;

  //   const filtered = this.state.topicsArr.filter((topic) => {
  //     return <div> topic.title.toLowerCase().includes(query.toLowerCase()) </div>
  //   })

  //   this.setState({search: query})
  // }

  render() {
    return (
      <div className="App">
        {/* <Search
          searching={this.state.search} 
          //theSearch={this.updateSearch}
        /> */}
        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile-edit" component={EditProfile} />
          <PrivateRoute exact path="/addtopic" component={NewTopic} />
          <PrivateRoute exact path="/topic/:id" component={TopicDetails} />
          <PrivateRoute exact path="/mytopics" component={MyTopics} />
          <PrivateRoute
            exact
            path="/mytopics/:id"
            component={UserTopicDetails}
          />
          <PrivateRoute exact path="/mycomments" component={MyComments} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/" component={Home} />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;
