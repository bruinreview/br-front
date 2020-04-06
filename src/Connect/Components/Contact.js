import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';
import Tags from '../../Components/Tags'
import { TextField } from '@material-ui/core';

import Airtable from 'airtable';

var base = new Airtable({apiKey:'key80rQbZcgw1Kmez'}).base('appn1ZhFA6zPF57JI')

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            showForm: true,
            apply: false,
            name: "",
            email: "",
            role: "Writer",
            r1: "",
            r2: "",
        }
    }
    submit = () =>{
        let {name, email, role, r1, r2} = this.state;
        base('Applications').create([
          {
            "fields": {
              "Name": name,
              "Notes": role,
              "Email": email,
              "Tell us about a contrarian view you hold": r1,
              "Describe a recent project or side-hustle": r2,
            }
          }], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
        });

        this.setState({
            showForm:false
        })

    }

    handleChange = key => e =>{
        this.setState({
            [key]: e.target.value
        })
    }

    handleChange = key => f =>{
        this.setState({
            [key]: f.target.value
        })
    }

    render(props){
        let {name, email, role, r2, r1} = this.state;
        return(
            <Fade>
            <div className="card" id="contact-card">
              <h3 className="title">Application</h3>
              <hr />
              {this.state.showForm ?
              <Fade when={this.state.showForm}>
                  <form>
                      <div className="input flex">
                          <input required="true" style={{margin:'10px 0 10px 0', background: '#191919',borderStyle:'none none solid none', borderColor:'white', color:'white', padding:'5px 7px 8px'}} placeholder={'Name'} value={name} onChange={this.handleChange("name")}/>
                      </div>
                      <div className="input flex flex-column">
                          <select style={{border:'none', width:'180px', color:'white', backgroundColor:'#191919'}}value={role} placeholder={'Role'} onChange={this.handleChange("role")}>
                              <option value="Writer">Writer</option>
                              <option value="Artist">Artist</option>
                              <option value="Developer">Developer</option>
                              <option value="Sponsor">Sponsor</option>
                              <option value="Other">Other</option>
                          </select>
                          <div style={{width:'182px',borderBottom:'2px solid white'}}/>
                      </div>
                      <div className="input flex">
                          <input style={{margin:'10px 0 10px 0', background: '#191919',borderStyle:'none none solid none', borderColor:'white', color:'white', padding:'5px 8px'}} placeholder={'Email'} value={email} onChange={this.handleChange("email")}/>
                      </div>
                      <p>Tell us about a contrarian view you hold.</p>
                      <textarea onChange={(e)=>{this.setState({r1: e.target.value})}} value={r1} id="response1"/>
                      <p>Describe a recent project or side-hustle of yours.</p>
                      <textarea onChange = {(f) => {this.setState({r2: f.target.value})}} value = {r2} id="response2"/>
                      <button id="submitBtn" onClick={this.submit}>Submit</button>
                </form>
              </Fade>:
              <Fade>
                  <div className="ty"> Thanks for applying to The Bruin Review, we'll be in touch soon! </div>
              </Fade>}
            </div>
            </Fade>
        )
    }
}
