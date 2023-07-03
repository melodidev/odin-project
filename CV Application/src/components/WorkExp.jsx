export default function WorkExp(props) {
  return (
    <div>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="Company"
        onChange={props.handleChangeWorkExp}
        value={props.workExp.company}
        name="company"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="Position"
        onChange={props.handleChangeWorkExp}
        value={props.workExp.position}
        name="position"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="Start Date"
        onChange={props.handleChangeWorkExp}
        value={props.workExp.start}
        name="start"
      ></input>
      <input
        type="text"
        className="form-control form-control-sm mb-1"
        placeholder="End Date"
        onChange={props.handleChangeWorkExp}
        value={props.workExp.end}
        name="end"
      ></input>
      <textarea
        className="form-control form-control-sm mb-1"
        placeholder="Description"
        onChange={props.handleChangeWorkExp}
        value={props.workExp.description}
        name="description"
      ></textarea>
    </div>
  )
}