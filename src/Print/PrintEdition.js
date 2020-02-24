import React, { Component } from 'react';
import printEdition from '../resources/print_editions/BRInauguralEdition.pdf'

function PrintEdition(){
    return (
      <object margin='0' width="100%" height="100%" id="print-content">
      <iframe margin='0' padding='0' width="100%" height="100%" src={printEdition} ></iframe>
      </object>
    );
}

export default PrintEdition;
