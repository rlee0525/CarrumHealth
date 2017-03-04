import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    };

    this.handleActiveStep = this.handleActiveStep.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
  }

  goToDashboard() {
    hashHistory.replace("/dashboard");
  }

  // Without backend, handling progression of the dashboard through activeStep
  handleActiveStep(activeStep) {
    this.setState({ activeStep });
  }

  render() {
    return (
      <div className="maincontent-progress">

      </div>
    );
  }
}

export default Dashboard;
