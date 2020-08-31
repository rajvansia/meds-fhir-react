import React from 'react';
import '../styles.css';

export default function BigCard(props) {

  return (
    <div class="card">
      <div class="title">
        Add an Annotation for the Weight Observation
      </div>
      <div class="annotations">
      Latest Annotation
      <li id="note">No annotations</li>
      </div>
    </div>

);
}
