/**
 * Created by fsdevlondon on 06/08/2016.
 */
import React from "react";
import UserProfile from "../components/user/UserProfile"
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();


class UserProfileContainer extends React.Component {

  constructor () {
    super();
    this.state = { username : null };
    this.fetchUser = this.fetchUser.bind(this)
  }

  componentDidMount() {
    this.fetchUser(this.props.params.username);
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({user : data});
    }).catch((err)=> {
      console.log(err);
    });
  }

  render() {
    <UserProfile user={this.state.user}/>
  }

}

export default UserProfileContainer;