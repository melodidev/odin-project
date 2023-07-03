export default function Education(props) {
  return (
    <div>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="Course/Program"
        onChange={props.handleChangeEducation}
        value={props.education.course}
        name="course"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="University"
        onChange={props.handleChangeEducation}
        value={props.education.university}
        name="university"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="Start Date"
        onChange={props.handleChangeEducation}
        value={props.education.start}
        name="start"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="End Date"
        onChange={props.handleChangeEducation}
        value={props.education.end}
        name="end"
      ></input>
      <textarea
        className="form-control form-control-sm mb-1"
        placeholder="Description"
        onChange={props.handleChangeEducation}
        value={props.education.description}
        name="description"
      ></textarea>
    </div>
  )
}