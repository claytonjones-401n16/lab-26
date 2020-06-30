import { useState } from 'react';

export default function useForm(callback) {
  
  const [values, setValues] = useState({});

  function handleSubmit(e) {
    if (e) e.preventDefault();
    callback(values);
  }

  function onChange(e) {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  return {
    handleSubmit,
    onChange,
    values
  }
}