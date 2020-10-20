import React, { Component } from 'react'
import { Fade } from 'react-reveal'
import './About.css'

export default class GetInvolved extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(props) {
    return (
      <Fade>
        <div className="card">
          <h3 className="title">Questions?</h3>
          <hr />
          <p>Email management@Bruinreview.com</p>
        </div>
      </Fade>
    )
  }
}
