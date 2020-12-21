import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Chat from '../../Pages/Chat';
import Record from '../../Pages/Record';
import Etc from '../../Pages/Etc';
import './Content.css';

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/record" component={Record} />
        <Route exact path="/etc" component={Etc} />
      </Switch>
    </div>
  )
}