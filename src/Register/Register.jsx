import * as React from "react";

const registerUrl = "https://forms.gle/QjnqC5tyVwp5A7pe7";
const carpoolUrl = "https://docs.google.com/spreadsheets/d/1akYN1atPnNvSKC307R9RvCaFRN3EVGxdtQhLbeue3jE";

const Register = () => {
  return <div className="heroContainer">
    <div className="container">
      <h3>
        <a href={registerUrl} target="_blank" rel="noreferrer">Register</a>
      </h3>

      <div>
        <span>Requirements</span>
        <ul>
          <li>You must be 18+ to register.</li>
          <li>You must be prepared to camp outdoors.</li>
          <li>You must provide enough food for yourself.</li>
          <li>You must coordinate within the carpool list.</li>
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
    </div>
  </div>;
};

export default Register;