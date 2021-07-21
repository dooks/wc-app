import { isObject } from "formik";
import * as React from "react";
import categories from "./categories.json";

const validate = (cached) => {
  if (!cached || !isObject(cached)) return null;
  const keys = Object.keys(cached);
  return categories.every(category => keys.includes(category.name))
}

const useChecklist = () => {
  const localStorage = window.localStorage;
  const cachedChecklist = React.useMemo(() => {
    let checklist
    try {
      checklist = JSON.parse(localStorage.getItem("checklist"));
    }
    catch (e) {
      checklist = null;
    }

    return validate(checklist) ?
      checklist : 
      categories.reduce((prev, curr) => (prev[curr.name] = {}, prev), {});
  }, [localStorage]);

  const [ checklist, _setChecklist ] = React.useState(cachedChecklist);

  const setChecklist = React.useCallback((obj) => {
    localStorage.setItem("checklist", JSON.stringify(obj));
    _setChecklist(obj);
  }, [localStorage]);

  return {
    setChecklist,
    checklist
  }
}

export default useChecklist;