import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import Record from '../../pages/Record';
import Etc from '../../pages/Etc';
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