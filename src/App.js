import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Header from './Components/Header.js'
import SmallCard from  './Components/SmallCard.js'
import BigCard from  './Components/BigCard.js'

function getPatientName(pt) {
  if (pt.name) {
    var names = pt.name.map(function(name) {
      return name.given.join(" ") + " " + name.family;
    });
    return names.join(" / ")
  } else {
    return "anonymous";
  }
}




function App(props) {
  const [currentObs, setCurrentObs] = useState(0);
  const [currentName, setCurrentName] = useState(0);
  const [currentPatient, setCurrentPatient] = useState(0);


  useEffect(() => {
    props.client.request(`Patient/${props.client.patient.id}`).then(
      function(patient) {
        var name = getPatientName(patient);
        console.log(name);
        setCurrentPatient(patient)
        setCurrentName(name)

      }
    );
  }, []);


  useEffect(() => {
    var query = new URLSearchParams();

    query.set("patient", props.client.patient.id);
    query.set("_count", 100);
    query.set("_sort", "-date");
    query.set("code", [
      'http://loinc.org|8462-4',
      'http://loinc.org|8480-6',
      'http://loinc.org|2085-9',
      'http://loinc.org|2089-1',
      'http://loinc.org|55284-4',
      'http://loinc.org|3141-9',
    ].join(","));

    props.client.request("Observation?" + query, {
      pageLimit: 0,
      flat: true
    }).then(
      function(ob) {console.log(ob);})
  }, []);

  useEffect(() => {
    var queryMed = new URLSearchParams();
    queryMed.set("patient", props.client.patient.id);

    props.client.request("MedicationRequest?" + queryMed, {
      pageLimit: 0, // get all pages
      flat: true // return flat array of Observation resources
    }).then(
      function(meds) {console.log(meds);})
  }, []);


  return (
    <div class="grid-container">
      <header class="header">
      <Header patient={currentPatient} name={currentName}/>
      </header>

      <main class="main">
        <div class="main-overview">
          <SmallCard vital = "Height"/>
          <SmallCard vital = "Weight"/>
          <SmallCard vital = "Systolic Blood Pressure"/>
          <SmallCard vital = "Diastolic Blood Pressure"/>
          <SmallCard vital = "LDL"/>
          <SmallCard vital = "HDL"/>
        </div>

        <div class="big-card">


        <BigCard />

          <div class="card">
            <div class="title">
              Medication Requests
            </div>
            <ul id="med_list"></ul>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
