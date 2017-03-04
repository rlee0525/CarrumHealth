import React from 'react';
import ProgressBar from './progress_bar';
import ProgramApplication from './program_application';
import { withRouter, hashHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    };

    this.handleActiveStep = this.handleActiveStep.bind(this);
    this.goToTask = this.goToTask.bind(this);
  }

  goToTask() {
    hashHistory.replace("/task");
  }

  // Without backend, handling progression of the dashboard through activeStep
  handleActiveStep(activeStep) {
    this.setState({ activeStep });
  }

  render() {
    return (
      <div className="maincontent-progress">
        <ProgressBar handleActiveStep={this.handleActiveStep}/>
        <ProgramApplication activeStep={this.state.activeStep}/>
      </div>
    );
  }
}

export default Dashboard;
