import React from 'react';
import FontAwesome from 'react-fontawesome';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      pcp: true,
      name: "Raymond Lee",
      phoneNumber: "206-779-5143",
      addressOne: "1080 Folsom St",
      addressTwo: "Apt 228",
      city: "San Francisco",
      state: "California",
      zip: "94103",
      mostRecentVisitDate: "",
      specialist: true,
      orthoName: "Raymond Lee",
      orthoPhoneNumber: "206-779-5143",
      orthoAddressOne: "1080 Folsom St",
      orthoAddressTwo: "Apt 228",
      orthoCity: "San Francisco",
      orthoState: "California",
      orthoZip: "94103",
      orthoMostRecentVisitDate: ""
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.pcpCheckBox = this.pcpCheckBox.bind(this);
    this.orthoCheckBox = this.orthoCheckBox.bind(this);
  }

  nextPage() {
    let step = this.state.step + 1;
    this.setState({ step });
  }

  prevPage() {
    let step = this.state.step - 1;
    this.setState({ step });
  }

  pcpCheckBox() {
    let pcp = !this.state.pcp;
    this.setState({ pcp });
  }

  orthoCheckBox() {
    let specialist = !this.state.specialist;
    this.setState({ specialist });
  }

  deletePcp() {
    let pcp = false;
    this.setState({ pcp });
  }

  deleteOrtho() {
    let specialist = false;
    this.setState({ specialist });
  }

  editPcp() {
    let step = 2;
    this.setState({ step });
  }

  editOrtho() {
    let step = 3;
    this.setState({ step });
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  instructions() {
    return (
      <div className="instruction">
        <div className="instructions">
          <span id="exclamation">
            <FontAwesome className='fa-exclamation-circle'
              name='exclamation-circle' />
          </span>
          <span id="release-instructions">
            As a patient you have the right to inspect or obtain a copy
            of your health information with limited exceptions. <br/><br/>
            We need to collect some information and prepare a Medical Record
            Release Form that will allow Carrum Health to obtain a copy of
            your relevant medical records from your existing physicians.
            The records will then be shared with your selected surgeon as
            part of the program evaluation process.
          </span>
        </div>

        <div className="one-button">
          <button id="continue-button" onClick={this.nextPage}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  primaryCarePhysician() {
    return (
      <div className="outer-pcp">
        <div className="form-pcp">
          <span id="question">Who is your Primary Care Physician (PCP)?</span>
          <span id="checkbox-1">
          <input type="checkbox" checked={!this.state.pcp}
                 id="checkbox1" onClick={this.pcpCheckBox}/>
            Don't have PCP
          </span>
          <span id="name-input">
            <p>Name</p>
            <input type="text" value={this.state.name}
                   onChange={this.update('name')}/>
          </span>
          <span id="phone-number-input">
            <p>Phone number</p>
            <input type="text" value={this.state.phoneNumber}
                   onChange={this.update('phoneNumber')}/>
          </span>

          <div id="address-input">
            <span id="address-one-input">
              <p>Address 1</p>
              <input type="text" value={this.state.addressOne}
                     onChange={this.update('addressOne')}/>
            </span>
            <span id="address-two-input">
              <p>Address 2</p>
              <input type="text" value={this.state.addressTwo}
                     onChange={this.update('addressTwo')} />
            </span>
          </div>

          <div id="address-input-2">
            <span id="city-input">
              <p>City</p>
              <input type="text" value={this.state.city}
                     onChange={this.update('city')}/>
            </span>
            <span id="state-input">
              <p>State</p>
              <input type="text" value={this.state.state}
                     onChange={this.update('state')}/>
            </span>
            <span id="zip-input">
              <p>Zip</p>
              <input type="text" value={this.state.zip}
                     onChange={this.update('zip')}/>
            </span>
          </div>

          <span id="mrvd-input">
              <p>Most recent visit date</p>
              <input type="text" value={this.state.mostRecentVisitDate}
                     onChange={this.update('mostRecentVisitDate')}/>
          </span>
        </div>

        <div className="two-buttons">
          <button id="back-button" onClick={this.prevPage}>
            <FontAwesome className='fa-chevron-left'
              name='chevron-left' />Back
          </button>
          <button id="continue-button" onClick={this.nextPage}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  orthopedicSpecialist() {
    return (
      <div className="outer-pcp">
        <div className="form-pcp">
          <span id="question">
            Who is the orthopedic specialist that you have seen?
          </span>
          <span id="checkbox-2">
            <input type="checkbox" checked={!this.state.specialist}
                   id="checkbox2" onClick={this.orthoCheckBox}/>
            Have not seen a specialist
          </span>
          <span id="name-input">
            <p>Name</p>
            <input type="text" value={this.state.orthoName}
                   onChange={this.update('orthoName')}/>
          </span>
          <span id="phone-number-input">
            <p>Phone number</p>
            <input type="text" value={this.state.orthoPhoneNumber}
                   onChange={this.update('orthoPhoneNumber')}/>
          </span>

          <div id="address-input">
            <span id="address-one-input">
              <p>Address 1</p>
              <input type="text" value={this.state.orthoAddressOne}
                     onChange={this.update('orthoAddressOne')}/>
            </span>
            <span id="address-two-input">
              <p>Address 2</p>
              <input type="text" value={this.state.orthoAddressTwo}
                     onChange={this.update('orthoAddressTwo')} />
            </span>
          </div>

          <div id="address-input-2">
            <span id="city-input">
              <p>City</p>
              <input type="text" value={this.state.orthoCity}
                     onChange={this.update('orthoCity')}/>
            </span>
            <span id="state-input">
              <p>State</p>
              <input type="text" value={this.state.orthoState}
                     onChange={this.update('orthoState')}/>
            </span>
            <span id="zip-input">
              <p>Zip</p>
              <input type="text" value={this.state.orthoZip}
                     onChange={this.update('orthoZip')}/>
            </span>
          </div>

          <span id="mrvd-input">
              <p>Most recent visit date</p>
              <input type="text" value={this.state.orthoMostRecentVisitDate}
                     onChange={this.update('orthoMostRecentVisitDate')}/>
          </span>
        </div>

        <div className="two-buttons">
          <button id="back-button" onClick={this.prevPage}>
            <FontAwesome className='fa-chevron-left'
              name='chevron-left' />Back
          </button>
          <button id="continue-button" onClick={this.nextPage}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  reviewPage() {
    let pcpState = this.state.city + ", " + this.state.state + " " + this.state.zip;
    let pcpAddress = this.state.addressOne + ", " + this.state.addressTwo;
    let orthoState = this.state.orthoCity + ", " + this.state.orthoState + " " + this.state.orthoZip;
    let orthoAddress = this.state.orthoAddressOne + ", " + this.state.orthoAddressTwo;

    return (
      <div className="outer-pcp">
        <div className="review-form">
          <span id="review-information">
            Review the information about physicians you have seen
            regarding your condition and include additional ones as necessary.
          </span>
          {this.state.pcp && (<div id="pcp-specialist">
            <div id="title">Primary Care Physician</div>
            <div id="information-container">
              <div id="physician-name">
                <span id="details-label">Name:</span>
                <span>{this.state.name}</span>
                <span id="link-fa" onClick={this.editPcp.bind(this)}>
                  <FontAwesome className="fa-pencil" name="pencil" /> Edit
                </span>
              </div>
              <div id="physician-phone">
                <span id="details-label">Phone:</span>
                <span>{this.state.phoneNumber}</span>
                <span id="link-fa" onClick={this.deletePcp.bind(this)}>
                  <FontAwesome className="fa-trash" name="trash" /> Delete
                </span>
              </div>
              <div id="physician-address">
                <span id="details-label">Address:</span>
                <div id="address-summary">
                  <span>{pcpAddress}</span>
                  <span>{pcpState}</span>
                </div>
                <span></span>
              </div>
            </div>
          </div>)}
          {this.state.specialist && (<div id="orthopedic-specialist">
            <div id="title">Orthopedic Specialist</div>
            <div id="information-container">
              <div id="physician-name">
                <span id="details-label">Name:</span>
                <span>{this.state.orthoName}</span>
                <span id="link-fa" onClick={this.editOrtho.bind(this)}>
                  <FontAwesome className="fa-pencil" name="pencil" /> Edit
                </span>
              </div>
              <div id="physician-phone">
                <span id="details-label">Phone:</span>
                <span>{this.state.orthoPhoneNumber}</span>
                <span id="link-fa" onClick={this.deleteOrtho.bind(this)}>
                  <FontAwesome className="fa-trash" name="trash" /> Delete
                </span>
              </div>
              <div id="physician-address">
                <span id="details-label">Address:</span>
                <div id="address-summary">
                  <span>{orthoAddress}</span>
                  <span>{orthoState}</span>
                </div>
                <span></span>
              </div>
            </div>
          </div>)}
          <div id="additional-physician" onClick={this.editOrtho.bind(this)}>
            <button>+ Additional Physician</button>
          </div>
        </div>

        <div className="two-buttons">
          <button id="back-button" onClick={this.prevPage}>
            <FontAwesome className='fa-chevron-left'
              name='chevron-left' />Back
          </button>
          <button id="continue-button-2">
            Done with physicians
          </button>
        </div>
      </div>
    );
  }

  renderLogic() {
    if (this.state.step === 1) {
      return this.instructions();
    } else if (this.state.step === 2) {
      return this.primaryCarePhysician();
    } else if (this.state.step === 3) {
      return this.orthopedicSpecialist();
    } else if (this.state.step === 4) {
      return this.reviewPage();
    }
  }

  render() {
    return (
      <div className="maincontent-progress">
        <div id="form-title">Medical Records Release Form</div>
        {this.renderLogic()}
      </div>
    );
  }
}

export default Task;
