import React from 'react';
import ProgressBar from './progress_bar';
import ProgramApplication from './program_application';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    };

    this.handleActiveStep = this.handleActiveStep.bind(this);
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
