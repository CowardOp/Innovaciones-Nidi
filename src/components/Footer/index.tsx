const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Color</a>
          <a className="link link-hover">Peinados</a>
          <a className="link link-hover">Manicure</a>
          <a className="link link-hover">Keratina</a>
        </nav>
        <nav>
          <h6 className="footer-title">Informacion</h6>
          <a className="link link-hover">Sobre Nosotros</a>
          <a className="link link-hover">Contactos</a>
          <a className="link link-hover">Trabajos</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="text-3xl hover:scale-110 hover:text-[#1877F2] duration-500">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="text-3xl hover:scale-110 hover:text-[#ffffff] duration-500">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a className="text-3xl hover:scale-110 hover:text-[#E4405F] duration-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export { Footer };
