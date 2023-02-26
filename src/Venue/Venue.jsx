import * as React from "react";
import { Accordion } from "react-bootstrap";

import faqs from "./Venue.json";
import styles from "./Venue.module.css";

const Venue = () => {
  return <div className="heroContainer">
    <div className="container">
      <Accordion defaultActiveKey={["0"]} flush alwaysOpen>
        {faqs.map(( faq, i) => 
          <Accordion.Item className={styles.wcAccordion} key={i} eventKey={i}>
            <Accordion.Header>
              <h3 className={styles.header}>{faq.header}</h3>
            </Accordion.Header>

            <Accordion.Body>
              <span>{faq.description}</span>

              {faq.items && <ul>
                {faq.items.map((item, i) => 
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

export default Venue;