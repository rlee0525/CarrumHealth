import React from 'react';
import FontAwesome from 'react-fontawesome';
import { hashHistory } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <button id="route" onClick={() => hashHistory.replace("/dashboard")}>
          Dashboard
        </button>
        <button id="route" onClick={() => hashHistory.replace("/task")}>
          Task
        </button>
      </div>
    );
  }
}

export default Footer;
