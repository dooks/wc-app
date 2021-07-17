import * as React from "react";

import faqs from "./faq.json";
import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.css";

const FAQ = () => {
  return <Accordion defaultActiveKey="0" flush>
    {faqs.map(( faq, i) => 
      <Accordion.Item className={styles.wcAccordion} key={i} eventKey={i}>
        <Accordion.Header>
          <h4>{faq.header}</h4>
        </Accordion.Header>

        <Accordion.Body>
          <span>{faq.description}</span>
          <ul>
            {faq.items.map((item, i) => 
              <li key={i}>{item}</li>
            )}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    )}
  </Accordion>
};

export default FAQ;