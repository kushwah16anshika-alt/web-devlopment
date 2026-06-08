function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 mt-5">
      <div className="container text-center">
        <p>
          Your favorite food delivery platform connecting customers with restaurants
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>

        <hr />

        <p className="mb-0">© 2026 Cravings. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;