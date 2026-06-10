function Contact() {
  return (
    <div className="signup-hero d-flex align-items-center min-vh-100 position-relative">

      {/* <img
        src="/fresh "
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
        alt="bg"
      /> */}

      <div className="container">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg rounded-4">

            <h2 className="text-center fw-bold">Contact Us</h2>

            <input className="form-control my-2" placeholder="Name" />
            <input className="form-control my-2" placeholder="Email" />
            <input className="form-control my-2" placeholder="Phone" />
            <input className="form-control my-2" placeholder="Subject" />
            <textarea className="form-control my-2" rows="4" placeholder="Message" />

            <button className="btn btn-success w-100 mt-3">
              Send Message
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;