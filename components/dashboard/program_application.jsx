import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProgramApplication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextStep: "Complete medical records release form",
      stepStatus: "Complete",
      completeStatus: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStep === 1) {
      this.setState({
        nextStep: "Complete medical records release form",
        stepStatus: "Complete",
        completeStatus: false
      });
    } else if (nextProps.activeStep === 2) {
      this.setState({
        completeStatus: true
      });
    } else if (nextProps.activeStep === 3) {
      this.setState({
        nextStep: "Discharge appointment",
        stepStatus: "Prepare for your appointment",
        completeStatus: false
      });
    } else if (nextProps.activeStep === 4) {
      this.setState({
        completeStatus: true
      });
    }
  }

  render() {
    return (
      <div className="program_application">
        <div className="my-next-steps">
          <span className="form-header">My Next Steps</span>
          <span className="next-steps-form">
            {
              this.state.completeStatus ?
              <FontAwesome className='fa-check-circle' name='check-circle' /> :
              <FontAwesome className='fa-caret-right' name='caret-right' />
            }
            {
              this.state.completeStatus ?
              <span className="complete-status">
                Well done! You have no outstanding tasks.<br/><br/>
                <p>We are making progress on our end.</p></span> :
              this.state.nextStep
            }
          </span>
          <p id="status-form">
            {
              this.state.completeStatus ?
              "" : this.state.stepStatus
            }
          </p>
        </div>
        <div className="my-care-concierge">
          <span className="form-header">My Care Concierge</span>
        </div>
      </div>
    );
  }
}

export default ProgramApplication;
