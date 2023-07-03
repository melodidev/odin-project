export default function Form(props) {
  return (
    <div className="p-4">
      <div className="h4 fw-semibold text-secondary">Personal Details</div>
      <form>
        <div>
          <input 
            type="text"
            className="form-control form-control-sm mb-1"
            placeholder="Name"
            onChange={props.handleChange}
            value={props.person.name}
            name="name"
          ></input>
          <input 
            type="text"
            className="form-control form-control-sm mb-1"
            placeholder="Title"
            onChange={props.handleChange}
            name="title"
            value={props.person.title}
          ></input>
          <input
            type="tel"
            className="form-control form-control-sm mb-1"
            placeholder="Phone"
            onChange={props.handleChange}
            value={props.person.phone}
            name="phone"
          ></input>
          <input
            type="email"
            className="form-control form-control-sm mb-1"
            placeholder="E-mail"
            onChange={props.handleChange}
            value={props.person.mail}
            name="mail"
            ></input>
          <input
            type="text"
            className="form-control form-control-sm mb-1"
            placeholder="Location"
            onChange={props.handleChange}
            value={props.person.location}
            name="location"
          ></input>
          <textarea
            className="form-control form-control-sm"
            placeholder="Description"
            onChange={props.handleChange}
            value={props.person.description}
            name="description"
          ></textarea>
        </div>
      </form>
    </div>
  )
}