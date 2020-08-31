import React from 'react';
import '../styles.css';

export default function Header(props) {

  return (

<div>
  Patient Name:
  <span class="banner-value" id="patient_name">{props.name}</span>
  Gender:
  <span class="banner-value" id="gender">{props.patient.gender}</span>
  DOB:
  <span class="banner-value" id="dob">{props.patient.birthDate}</span>
</div>

);
}
