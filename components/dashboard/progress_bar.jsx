import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: Math.floor(Math.random() * 50 + 50)
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

  // the code needs to be DRY'ed. Keeps track of what's chosen.
  // Limited without backend to compare the data
  deactivateAll() {
    $("#circle-one")[0].classList.remove("active");
    $("#circle-two")[0].classList.remove("active");
    $("#circle-three")[0].classList.remove("active");
    $("#circle-four")[0].classList.remove("active");
    $("#rect-one")[0].classList.remove("active");
    $("#rect-two")[0].classList.remove("active");
    $("#rect-three")[0].classList.remove("active");
    $("#desc-1")[0].classList.remove("selected");
    $("#desc-2")[0].classList.remove("selected");
    $("#desc-3")[0].classList.remove("selected");
    $("#desc-4")[0].classList.remove("selected");
    $("#graph-one")[0].classList.add("not-chosen");
    $("#graph-two")[0].classList.add("not-chosen");
    $("#graph-three")[0].classList.add("not-chosen");
    $("#graph-four")[0].classList.add("not-chosen");
    $("#circle-one")[0].classList.remove("active");
    $("#m-circle-two")[0].classList.remove("active");
    $("#m-circle-three")[0].classList.remove("active");
    $("#m-circle-four")[0].classList.remove("active");
    $("#m-rect-one")[0].classList.remove("active");
    $("#m-rect-two")[0].classList.remove("active");
    $("#m-rect-three")[0].classList.remove("active");
    $("#m-desc-1")[0].classList.remove("selected");
    $("#m-desc-2")[0].classList.remove("selected");
    $("#m-desc-3")[0].classList.remove("selected");
    $("#m-desc-4")[0].classList.remove("selected");
    $("#m-graph-one")[0].classList.add("not-chosen");
    $("#m-graph-two")[0].classList.add("not-chosen");
    $("#m-graph-three")[0].classList.add("not-chosen");
    $("#m-graph-four")[0].classList.add("not-chosen");
  }

  drawQualification() {
    $("#circle-one")[0].classList.add("active");
    $("#desc-1")[0].classList.add("selected");
    $("#graph-one")[0].classList.remove("not-chosen");
    $("#m-circle-one")[0].classList.add("active");
    $("#m-desc-1")[0].classList.add("selected");
    $("#m-graph-one")[0].classList.remove("not-chosen");
    this.props.handleActiveStep(1);
    let percent = Math.floor(Math.random() * 50 + 50);
    this.setState({ percent });
  }

  drawPreparation() {
    $("#circle-one")[0].classList.add("active");
    $("#circle-two")[0].classList.add("active");
    $("#rect-one")[0].classList.add("active");
    $("#desc-2")[0].classList.add("selected");
    $("#graph-two")[0].classList.remove("not-chosen");
    $("#m-circle-one")[0].classList.add("active");
    $("#m-circle-two")[0].classList.add("active");
    $("#m-rect-one")[0].classList.add("active");
    $("#m-desc-2")[0].classList.add("selected");
    $("#m-graph-two")[0].classList.remove("not-chosen");
    this.props.handleActiveStep(2);
    let percent = Math.floor(Math.random() * 50 + 50);
    this.setState({ percent });
  }

  drawStay() {
    $("#circle-one")[0].classList.add("active");
    $("#circle-two")[0].classList.add("active");
    $("#circle-three")[0].classList.add("active");
    $("#rect-one")[0].classList.add("active");
    $("#rect-two")[0].classList.add("active");
    $("#desc-3")[0].classList.add("selected");
    $("#graph-three")[0].classList.remove("not-chosen");
    $("#m-circle-one")[0].classList.add("active");
    $("#m-circle-two")[0].classList.add("active");
    $("#m-circle-three")[0].classList.add("active");
    $("#m-rect-one")[0].classList.add("active");
    $("#m-rect-two")[0].classList.add("active");
    $("#m-desc-3")[0].classList.add("selected");
    $("#m-graph-three")[0].classList.remove("not-chosen");
    this.props.handleActiveStep(3);
    let percent = Math.floor(Math.random() * 50 + 50);
    this.setState({ percent });
  }

  drawActivities() {
    $("#circle-one")[0].classList.add("active");
    $("#circle-two")[0].classList.add("active");
    $("#circle-three")[0].classList.add("active");
    $("#circle-four")[0].classList.add("active");
    $("#rect-one")[0].classList.add("active");
    $("#rect-two")[0].classList.add("active");
    $("#rect-three")[0].classList.add("active");
    $("#desc-4")[0].classList.add("selected");
    $("#graph-four")[0].classList.remove("not-chosen");
    $("#m-circle-one")[0].classList.add("active");
    $("#m-circle-two")[0].classList.add("active");
    $("#m-circle-three")[0].classList.add("active");
    $("#m-circle-four")[0].classList.add("active");
    $("#m-rect-one")[0].classList.add("active");
    $("#m-rect-two")[0].classList.add("active");
    $("#m-rect-three")[0].classList.add("active");
    $("#m-desc-4")[0].classList.add("selected");
    $("#m-graph-four")[0].classList.remove("not-chosen");
    this.props.handleActiveStep(4);
    let percent = Math.floor(Math.random() * 50 + 50);
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
            <svg className="circle"><circle className="active" id="circle-one" onClick={() => { this.deactivateAll(); this.drawQualification(); }}/></svg>
            <svg className="circle"><circle className="" id="circle-two" onClick={() => { this.deactivateAll(); this.drawPreparation(); }}/></svg>
            <svg className="circle"><circle className="" id="circle-three" onClick={() => { this.deactivateAll(); this.drawStay(); }}/></svg>
            <svg className="circle"><circle className="" id="circle-four" onClick={() => { this.deactivateAll(); this.drawActivities(); }}/></svg>
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
            <FontAwesome className='fa-chevron-right' name='chevron-right' />
            Currently performing:
          </span>
          <span> Medical records collection</span>
        </div>

        <div className="progress-bar-diagram-mobile">
          <div className="rect-order">
            <svg className="rect" id="m-bar-one"><rect className="" id="m-rect-one"/></svg>
            <svg className="rect" id="m-bar-two"><rect className="" id="m-rect-two"/></svg>
            <svg className="rect" id="m-bar-three"><rect className="" id="m-rect-three"/></svg>
          </div>
          <div className="circle-order">
            <svg className="circle"><circle className="active" id="m-circle-one" onClick={() => { this.deactivateAll(); this.drawQualification(); }}/></svg>
            <svg className="circle"><circle className="" id="m-circle-two" onClick={() => { this.deactivateAll(); this.drawPreparation(); }}/></svg>
            <svg className="circle"><circle className="" id="m-circle-three" onClick={() => { this.deactivateAll(); this.drawStay(); }} /></svg>
            <svg className="circle"><circle className="" id="m-circle-four" onClick={() => { this.deactivateAll(); this.drawActivities(); }}/></svg>
          </div>
          <ul className="graphs">
            <svg className="circle-bg"><circle id="m-circle-five" /></svg>
            <li className="" id="m-graph-one">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="m-graph-two">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="m-graph-three">{this.progressBar(percent)}</li>
            <li className="not-chosen" id="m-graph-four">{this.progressBar(percent)}</li>
          </ul>
        </div>
        <div id="steps-description-mobile">
          <ul className="description-list">
            <li className="selected" id="m-desc-1" onClick={() => { this.deactivateAll(); this.drawQualification(); }}>1. Program Qualification<p><FontAwesome className='fa-caret-right' name='caret-right' />Medical records collection</p></li>
            <li id="m-desc-2" onClick={() => { this.deactivateAll(); this.drawPreparation(); }}>2. Pre-Admission Preparation<br/><p><FontAwesome className='fa-caret-right' name='caret-right' />Medical records collection</p></li>
            <li id="m-desc-3" onClick={() => { this.deactivateAll(); this.drawStay(); }}>3. Hospital Stay<br/><p><FontAwesome className='fa-caret-right' name='caret-right' />Discharge</p></li>
            <li id="m-desc-4" onClick={() => { this.deactivateAll(); this.drawActivities(); }}>4. Post-Discharge Activities<br/><p><FontAwesome className='fa-caret-right' name='caret-right' />Medical records collection</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
