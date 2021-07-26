import * as React from "react";

import styles from "./Register.module.css";

// const registerUrl = "https://forms.gle/QjnqC5tyVwp5A7pe7";
const carpoolUrl = "https://docs.google.com/spreadsheets/d/1akYN1atPnNvSKC307R9RvCaFRN3EVGxdtQhLbeue3jE";
const volunteerUrl = "https://docs.google.com/spreadsheets/d/12IcNfQf4Q5gAebUi24pVXBrF9KGKypqe0hk1JnOH6Is";

const Register = () => {
  return <div className="heroContainer">
    <div className="container">
      <h3>
        <a className={styles.disabled} target="_blank" rel="noreferrer">Register</a>
      </h3>

      <div>
        <ul>
          <li><strong>Registration is closed.</strong></li>
          <li>You must be 18+ to register.</li>
          <li>You must be prepared to camp outdoors.</li>
          <li>You must provide enough food for yourself.</li>
          <li>You must add your car to the carpool list <i>(even if going alone!)</i>.</li>
        </ul>
      </div>

      <h3>
        <a href={carpoolUrl} target="_blank" rel="noreferrer">Carpool List</a>
      </h3>

      <div>
        <ul>
          <li>There is a limit of 30 cars due to parking space, with some flexibility.</li>
          <li>RVs are allowed, but will need coordination with the hosts beforehand.</li>
          <li>Drive slowly on the access roads to avoid kicking up too much dust.</li>
        </ul>
      </div>

      <h3>
        <a href={volunteerUrl} target="_blank" rel="noreferrer">Volunteer</a>
      </h3>

      <div>
        <ul>
          <li>First-Aid Trained Staff</li>
          <li>Water Crew</li>
          <li>Light Crew</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Register;