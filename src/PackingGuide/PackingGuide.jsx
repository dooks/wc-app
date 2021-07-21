import * as React from "react";
import { Form, Card, Container, ListGroup } from "react-bootstrap";
import { Formik } from "formik";

import categories from "./categories.json";
import styles from "./PackingGuide.module.css";
import useChecklist from "./useChecklist";

const PackingGuide = () => {
  const { checklist, setChecklist } = useChecklist();
  
  const renderListItem = (item, index, value, name, handleChange) =>
    <label key={index} className={styles.label}>
      <ListGroup.Item
        active={value}
        className={styles.item}
        variant="dark">
        <Form.Check
          type="checkbox"
          name={`${name}.${item}`}
          value={value}
          checked={Boolean(value)}
          onChange={handleChange}
        />
        <span style={{ marginLeft: "8px" }}>{item}</span>
      </ListGroup.Item>
    </label>;

  const renderCategories = (index, values, category, handleChange) =>
    <Card
      key={index}
      bg="dark"
      text="light"
      className={styles.card}>
      <Card.Header>{category.name}</Card.Header>
      <ListGroup variant="flush">
        {category.items.map((item, i) => 
          renderListItem(item, i, values[category.name][item], category.name, handleChange)
        )}
      </ListGroup>
    </Card>

  if (!checklist) return null;

  return <Formik
    onSubmit={(data) => setChecklist(data)}
    initialValues={checklist}>
    {({ submitForm, handleChange, values }) => 
      <Form onChange={submitForm} className="heroContainer">
        <Container>
          <div className={styles.gridContainer}>
            {categories.map((category, i) =>
              renderCategories(i, values, category, handleChange)
            )}
          </div>
        </Container>
      </Form>
    }
  </Formik>
};

export default PackingGuide;