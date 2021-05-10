import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import UserList from './user/UserList'
import UserShow from './user/UserShow'
import PostList from './post/PostList'
import PostShow from './post/PostShow'
import authProvider from "./authProvider";
import dataProvider from './dataProvider'

class App extends Component {
  render() {
    return (
      <Admin authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name='user' list={UserList} show={UserShow}/>
        <Resource name='post' list={PostList} show={PostShow} />
      </Admin>
    );
  }
}
export default App;