export default function Cv(props) {
  return (
    <div className="p-4">
      <div className="row border-bottom border-2 border-info pb-lg-0 pb-2">
        <div className="col-lg-8 col-12">
          <div className="h3 fw-bolder text-info">{props.person.name}</div>
          <div className="h4 fw-semibold text-secondary">{props.person.title}</div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-phone fa-sm text-info me-1"></i>
            <div className="fs-sm text-secondary">{props.person.phone}</div>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-envelope fa-sm text-info me-1 mt-1"></i>
            <div className="fs-sm text-secondary">{props.person.mail}</div>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-location-dot fa-sm text-info me-1"></i>
            <div className="fs-sm text-secondary">{props.person.location}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 fs-sm">{props.person.description}</div>

      <div className="mt-4">
        <div className="h5 fw-bolder text-info text-uppercase">Education</div>
        {props.education.map((education, i) => (
          <div className="mt-2" key={i}>
            <div className="d-lg-flex justify-content-between">
              <div className="fw-semibold text-secondary">{education.course}</div>
              <div className="fs-xs text-secondary">
                <span className="fw-semibold me-2">{education.university}</span>
                <span>{education.start}</span> - <span>{education.end}</span>
              </div>
            </div>
            <div className="fs-sm">{education.description}</div>          
          </div>
        ))}

        <div className="h5 fw-bolder text-info text-uppercase mt-4">Work Experience</div>
        {props.workExp.map((workExp, i) => (
          <div className="mt-2" key={i}>
            <div className="d-lg-flex justify-content-between">
              <div className="fw-semibold text-secondary">{workExp.position}</div>
              <div className="fs-xs text-secondary">
                <span className="fw-semibold me-2">{workExp.company}</span>
                <span>{workExp.start}</span> - <span>{workExp.end}</span>
              </div>
            </div>
            <div className="fs-sm">{workExp.description}</div>          
          </div>
        ))}

      </div>
    </div>
  )
}