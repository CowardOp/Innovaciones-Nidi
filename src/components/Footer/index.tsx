const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="text-3xl hover:scale-110 duration-500">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="text-3xl hover:scale-110 duration-500">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a className="text-3xl hover:scale-110 duration-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export { Footer };
