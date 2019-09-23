import React, {Component} from 'react';
import './Card.css'

function Tags(props){
  return(
    <p className="metadata">{props.tags.join(" ")}</p>
  )
}

export default Tags
