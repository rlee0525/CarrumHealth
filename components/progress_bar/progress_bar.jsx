import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: Math.floor(Math.random() * 100)
    };

    this.drawQualification = this.drawQualification.bind(this);
    this.drawPreparation = this.drawPreparation.bind(this);
    this.drawStay = this.drawStay.bind(this);
    this.drawActivities = this.drawActivities.bind(this);
    this.progressBar = this.progressBar.bind(this);
  }

  componentDidMount() {
    this.progressBar(this.state.percent);
  }

  deactivateAll() {
    document.getElementById("circle-one").classList.remove("active");
    document.getElementById("circle-two").classList.remove("active");
    document.getElementById("circle-three").classList.remove("active");
    document.getElementById("circle-four").classList.remove("active");
    document.getElementById("rect-one").classList.remove("active");
    document.getElementById("rect-two").classList.remove("active");
    document.getElementById("rect-three").classList.remove("active");
    document.getElementById("desc-1").classList.remove("selected");
    document.getElementById("desc-2").classList.remove("selected");
    document.getElementById("desc-3").classList.remove("selected");
    document.getElementById("desc-4").classList.remove("selected");
    document.getElementById("graph-one").classList.add("not-chosen");
    document.getElementById("graph-two").classList.add("not-chosen");
    document.getElementById("graph-three").classList.add("not-chosen");
    document.getElementById("graph-four").classList.add("not-chosen");
  }

  drawQualification() {
    document.getElementById("circle-one").classList.add("active");
    document.getElementById("desc-1").classList.add("selected");
    document.getElementById("graph-one").classList.remove("not-chosen");
    let percent = Math.floor(Math.random() * 100);
    this.setState({ percent });
  }

  drawPreparation() {
    document.getElementById("circle-one").classList.add("active");
    document.getElementById("circle-two").classList.add("active");
    document.getElementById("rect-one").classList.add("active");
    document.getElementById("desc-2").classList.add("selected");
    document.getElementById("graph-two").classList.remove("not-chosen");
    let percent = Math.floor(Math.random() * 100);
    this.setState({ percent });
  }

  drawStay() {
    document.getElementById("circle-one").classList.add("active");
    document.getElementById("circle-two").classList.add("active");
    document.getElementById("circle-three").classList.add("active");
    document.getElementById("rect-one").classList.add("active");
    document.getElementById("rect-two").classList.add("active");
    document.getElementById("desc-3").classList.add("selected");
    document.getElementById("graph-three").classList.remove("not-chosen");
    let percent = Math.floor(Math.random() * 100);
    this.setState({ percent });
  }

  drawActivities() {
    document.getElementById("circle-one").classList.add("active");
    document.getElementById("circle-two").classList.add("active");
    document.getElementById("circle-three").classList.add("active");
    document.getElementById("circle-four").classList.add("active");
    document.getElementById("rect-one").classList.add("active");
    document.getElementById("rect-two").classList.add("active");
    document.getElementById("rect-three").classList.add("active");
    document.getElementById("desc-4").classList.add("selected");
    document.getElementById("graph-four").classList.remove("not-chosen");
    let percent = Math.floor(Math.random() * 100);
    this.setState({ percent });
  }

  progressBar(percent) {
    $(function(){
      var $ppc = $('.progress-pie-chart'), deg = 360 * percent / 100;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      } else {
        $ppc.removeClass('gt-50');
      }
      $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents span').html(percent + '%');
    });

    return (
      <div className="progress-pie-chart" data-percent={percent}>
        <div className="ppc-progress">
          <div className="ppc-progress-fill"></div>
        </div>

        <div className="ppc-percents">
          <div className="pcc-percents-wrapper">
            <span>%</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let percent = this.state.percent;

    return (
      <div className="progress-bar-steps">
        <div className="progress-bar-diagram">
          <div className="rect-order">
            <svg className="rect" id="bar-one"><rect className="" id="rect-one"/></svg>
            <svg className="rect" id="bar-two"><rect className="" id="rect-two"/></svg>
            <svg className="rect" id="bar-three"><rect className="" id="rect-three"/></svg>
          </div>
          <div className="circle-order">
            <svg className="circle"><circle className="active" id="circle-one"/></svg>
            <svg className="circle"><circle className="" id="circle-two"/></svg>
            <svg className="circle"><circle className="" id="circle-three"/></svg>
            <svg className="circle"><circle className="" id="circle-four"/></svg>
          </div>
          <ul className="graphs">
            <li className="" id="graph-one">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="graph-two">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="graph-three">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="graph-four">{this.progressBar(percent)}</li>
          </ul>
        </div>
        <div id="steps-description">
          <ul className="description-list">
            <li className="selected" id="desc-1" onClick={() => { this.deactivateAll(); this.drawQualification(); }}>1. Program <br/>Qualification</li>
            <li id="desc-2" onClick={() => { this.deactivateAll(); this.drawPreparation(); }}>2. Pre-Admission <br/>Preparation</li>
            <li id="desc-3" onClick={() => { this.deactivateAll(); this.drawStay(); }}>3. Hospital <br/>Stay</li>
            <li id="desc-4" onClick={() => { this.deactivateAll(); this.drawActivities(); }}>4. Post-Discharge <br/>Activities</li>
          </ul>
        </div>
        <div id="steps-details">
          <span id="current-title">
            <FontAwesome className='fa-chevron-right' name='chevron' />
            Currently performing:
          </span>
          <span> Medical records collection</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
