function Login() {
  return (
    <div className="signup-hero d-flex align-items-center min-vh-100 position-relative">
      
      <img
        src="/images/login-bg.jpg"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
        alt="bg"
      />

      <div className="container">
        <div className="col-md-5">
          <div className="card p-4 shadow-lg rounded-4">
            <h3 className="text-center fw-bold">Welcome Back</h3>

            <form>
              <input className="form-control my-2" placeholder="Email" />
              <input className="form-control my-2" placeholder="Password" />

              <button className="btn btn-primary w-100 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;