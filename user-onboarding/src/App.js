import React, {useState, useEffect} from 'react';
import Form from "./Form"
import * as yup from "yup"
import schema from "./Validation/formSchema"
import User from "./User"
import Axios from "axios"
import './App.css';

//--Initializers
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,  
}
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  termsOfService: "",
}
const initialUsers = []
const initialDisabled = true

function App() {
  //States
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  //Input change
  const inputChange = (name, value) => {
    // yup
    //   .reach(schema, name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: "",
    //     })
    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0],
    //     })
    //   })
    //   })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  //Post new user
  const postNewUser = newUser => {
    Axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        // debugger
        console.log(err)
      })
  }

  //Submit form
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfService: formValues.termsOfService
    }
    postNewUser(newUser)
  }

  //Validation
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <h1>User Onboarding</h1>

      <Form 
        values={formValues} 
        disabled={disabled} 
        errors={formErrors} 
        change={inputChange}
        submit={formSubmit} 
      />

      {
        users.map(item => {
          return (
            <User key={item.id} details={item} />
          )
        })
      }

    </div>
  );
}

export default App;
