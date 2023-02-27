import * as React from "react";
import { Accordion } from "react-bootstrap";

import policies from "./Policies.json";
import styles from "./Policies.module.css";

const Policies = () => {
  return <div className="heroContainer">
    <div className="container">
      <Accordion defaultActiveKey={["0"]} flush alwaysOpen>
        {policies.map((policy, i) =>
          <Accordion.Item className={styles.wcAccordion} key={i} eventKey={i}>
            <Accordion.Header>
              <h3 className={styles.header}>{policy.header}</h3>
            </Accordion.Header>

            <Accordion.Body>
              <span>{policy.description}</span>

              {policy.items && <ul>
                {policy.items.map((item, i) =>
                  <li key={i}>{item}</li>
                )}
              </ul>}
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </div>
  </div>;
};

export default Policies;