import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false
    };

    this.drawQualification = this.drawQualification.bind(this);
    this.drawPreparation = this.drawPreparation.bind(this);
    this.drawStay = this.drawStay.bind(this);
    this.drawActivities = this.drawActivities.bind(this);
  }

  deactivate(e) {
    // e.target.className -= "active";
  }

  drawQualification() {
    document.getElementById("progress-one").className += "active";
  }

  drawPreparation() {
    document.getElementById("progress-two").className += "active";
  }

  drawStay() {
    document.getElementById("progress-three").className += "active";
  }

  drawActivities() {
    document.getElementById("progress-four").className += "active";
  }

  render() {
    return (
      <div className="progress-bar-steps">
        <div className="progress-bar-diagram">
          <div className="rect-order">
            <svg className="rect" id="bar-one"><rect/></svg>
            <svg className="rect" id="bar-two"><rect/></svg>
            <svg className="rect" id="bar-three"><rect/></svg>
          </div>
          <div className="circle-order">
            <svg className="circle" id="circle-one"><circle/></svg>
            <svg className="circle" id="circle-two"><circle/></svg>
            <svg className="circle" id="circle-three"><circle/></svg>
            <svg className="circle" id="circle-four"><circle/></svg>
          </div>
        </div>
        <div id="steps-description">
          <ul className="description-list">
            <li>1. Program <br/>Qualification</li>
            <li>2. Pre-Admission <br/>Preparation</li>
            <li>3. Hospital <br/>Stay</li>
            <li>4. Post-Discharge <br/>Activities</li>
          </ul>
        </div>
        <div id="steps-details">
          <span id="current-title">
            <FontAwesome className='fa-chevron-right' name='chevron' />
             Currently performing:
          </span>
          <span>Medical records collection</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
