// Services page: the services I offer, each with a picture
function Services() {
  return (
    <div className="page">
      <h1>Services</h1>

      <div className="cards">
        <div className="card">
          <img src="/images/service-web.svg" alt="Web development" />
          <h3>Web Development</h3>
          <p>Simple, responsive websites made with HTML, CSS, JavaScript and React.</p>
        </div>

        <div className="card">
          <img src="/images/service-programming.svg" alt="Programming" />
          <h3>General Programming</h3>
          <p>Small programs and scripts that solve everyday problems.</p>
        </div>

        <div className="card">
          <img src="/images/service-ui.svg" alt="UI design" />
          <h3>Website Layout and Design</h3>
          <p>Clean and easy to use page layouts.</p>
        </div>

        <div className="card">
          <img src="/images/service-mobile.svg" alt="Mobile friendly" />
          <h3>Mobile Friendly Sites</h3>
          <p>Pages that look good on phones and computers.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
