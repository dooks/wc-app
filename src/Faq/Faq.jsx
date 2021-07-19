import * as React from "react";

import faqs from "./faq.json";
import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.css";

const FAQ = () => {
  return <div className="container">
      <Accordion defaultActiveKey="0" flush>
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
};

export default FAQ;