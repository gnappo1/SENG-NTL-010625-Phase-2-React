//! To control a form, you can create one state variable per form element to control
//! Or better, why not creating ONE object with as many key/value pairs as the number of form elements to track

import { useState } from "react";
import toast from "react-hot-toast";
import { object, string, number } from 'yup';

let projectSchema = object({
  name: string("Name must be a string").required("Name must be given").min(2, "The name should be at least 2 characters"),
  about: string("About must be a string").required("About must be given").min(10, "The about should be at least 10 characters"),
  link: string("Link must be a string").required("Link must be given"),
  image: string("Image must be a string").required("Image must be given"),
  phase: number("Phase must be a number").required("Phase must be given").min(1, "Phase can be 1 at the minimum").max(5, "Phase can be 5 at the minimum"),
});

const initialValues = { //! It will only be created ONCE
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
}

const ProjectForm = ({ handleAddProject }) => {

  const [newProject, setNewProject] = useState(initialValues)

  // const initialValues = { //! It will be re-created on EVERY rendering
  //   name: "",
  //   about: "",
  //   phase: "",
  //   link: "",
  //   image: "",
  // }

  const handleChange = (e) => {
    setNewProject(prevNewProject => ({ ...prevNewProject, [e.target.name]: e.target.value }))
    // setNewProject(prevNewProject => ({ ...prevNewProject, [target.name]: target.value })) => {target}
    // setNewProject(prevNewProject => ({ ...prevNewProject, [name]: value })) => { target: { name, value } }
  }

  const handleSubmit = (e) => {
    //! 1. Prevent Page Refreshes!!!
    e.preventDefault()
    //! 2. DO NOT TRUST YOUR USERS EEEEEEEEVER!!!!!
    //! 2a. The data is already in object notation -> newProject
    projectSchema.validate(newProject)
    .then(validatedNewProject => {

      //! How do we use the validated object now???
      //! PESSIMISTIC APPROACH:
      //! 1. communicate with the server, if working, an id will be generated
      //! 2. In a correct submission, add the project to the state variable to cause a re-rendering and show it in the UI
      //! 3. If promises are rejected or fulfilled but not ok, we flow the error to the catch and hot-toast will display it
      fetch("http://localhost:4000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedNewProject)
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error("The POST request failed")
      })
        .then(createdProject => {
          handleAddProject(createdProject)
          setNewProject(initialValues)
          toast.success(`Successfully added project ${createdProject.name}`)
      })
        .catch(errorObj => toast.error(errorObj.message))
    })
    .catch(errorObj => toast.error(errorObj.message))
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={newProject.name} onChange={handleChange}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={newProject.about} onChange={handleChange}/>

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={newProject.phase} onChange={handleChange}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={newProject.link} onChange={handleChange}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={newProject.image} onChange={handleChange}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
