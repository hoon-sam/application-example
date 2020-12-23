import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import Record from '../../pages/Record';
import Etc from '../../pages/Etc';
import Login from '../../pages/Login';
import './Content.css';

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/record" component={Record} />
        <Route path="/etc" component={Etc} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  )
}