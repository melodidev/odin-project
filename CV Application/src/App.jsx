import React from "react"

import Cv from "./components/Cv"
import Form from "./components/Form"
import Education from "./components/Education"
import WorkExp from "./components/WorkExp"

import "./App.css"

export default function App() {
  let [personalDetails, setPersonalDetails] = React.useState({
    name: "Melodi Dev",
    title: "Software Developer",
    phone: "01234565789",
    mail: "melodidev@mail",
    location: "Melbourne/Australia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  });

  let [education, setEducation] = React.useState([
    {
      course: "CS50x",
      university: "Harvard University",
      start: "April 2022",
      end: "September 2022",
      description: "Suffered but survived.",
    },
    {
      course: "Full Stack JavaScript",
      university: "The Odin Project",
      start: "September 2023",
      end: "Present",
      description: "Keep going!",
    }
  ]);

  let [workExp, setWorkExp] = React.useState([
    {
      company: "Upwork",
      position: "Freelancer",
      start: "March 2023",
      end: "Present",
      description: "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.",
    }
  ]);

  function handleChange(event) {
    setPersonalDetails(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleChangeEducation(event, key) {
    setEducation(education.map((education, i) => {
      if (i == key) {
        return { ...education,
        [event.target.name]: event.target.value };
      } else {
        return education;
      }
    }));
  }

  function deleteEducation(key) {
    setEducation(education.filter((educationItem, i) => i != key));
  }

  function addEducation() {
    setEducation([
      ...education,
      {
        course: "",
        university: "",
        start: "",
        end: "",
        description: "",
      }
    ]);
  }

  function handleChangeWorkExp(event, key) {
    setWorkExp(workExp.map((workExp, i) => {
      if (i == key) {
        return {
          ...workExp,
          [event.target.name]: event.target.value,
        };
      } else {
        return workExp;
      }
    }));
  }

  function deleteWorkExp(key) {
    setWorkExp(workExp.filter((workExpItem, i) => i != key));
  }

  function addWorkExp() {
    setWorkExp([
      ...workExp,
      {
        company: "",
        position: "",
        start: "",
        end: "",
        description: "",
      }
    ]);
  }

  return (
    <div className="container">
      <div className="row">

        <div className="col-12 col-lg-6">
          <div className="bg-light border rounded my-lg-4 my-2">
            <Form handleChange={handleChange} person={personalDetails}  />

            <div className="px-4 pb-2">
              <div className="h4 fw-semibold text-secondary mt-2">Education</div>
              {education.map((educationItem, i) => (
                <div className="mb-3" key={i}>
                  <Education
                    education={educationItem}
                    handleChangeEducation={event => handleChangeEducation(event, i)}
                  />
                  {(i+1 == education.length) && (
                    <button
                      type="button"
                      className="btn btn-info btn-sm me-1"
                      onClick={addEducation}
                    >
                      Add
                    </button>
                  )}
                  {education.length && <button type="button" className="btn btn-secondary btn-sm" onClick={() => deleteEducation(i)}>Delete</button>}
                </div>
              ))}
              {!education.length && <button type="button" className="btn btn-info btn-sm me-1" onClick={addEducation}>Add</button>}
            </div>

            <div className="px-4 pb-4">
              <div className="h4 fw-semibold text-secondary mt-2">Work Experience</div>
              {workExp.map((workExpItem, i) => (
                <div className="mb-3" key={i}>
                  <WorkExp workExp={workExpItem} handleChangeWorkExp={event => handleChangeWorkExp(event, i)} />
                  {(i+1 == workExp.length) && <button type="button" className="btn btn-info btn-sm me-1" onClick={addWorkExp}>Add</button>}
                  {workExp.length && <button type="button" className="btn btn-secondary btn-sm" onClick={() => deleteWorkExp(i)}>Delete</button>}
                </div>
              ))}
              {!workExp.length && <button type="button" className="btn btn-info btn-sm me-1" onClick={addWorkExp}>Add</button>}
            </div>
            
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="bg-light border rounded my-lg-4 my-2">
            <Cv person={personalDetails} education={education} workExp={workExp} />
          </div>
        </div>

      </div>
    </div>
  )
}