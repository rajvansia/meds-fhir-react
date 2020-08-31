import React from 'react';
import '../styles.css';

export default function SmallCard(props) {

  return (
    <div class="small-card">

    <div>{props.vital}</div>
    <div class="ob-value" id="height">undefined</div>
    </div>

);
}
