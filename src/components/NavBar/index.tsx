type Props = {
  data: string[];
  subData: string[];
};

const NavBar = ({ data, subData }: Props) => {
  return (
    <>
      <div className="navbar bg-white text-black shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {data.map((item) => (
                <li className="text-white" key={item}>
                  <a>{item}</a>
                </li>
              ))}
              <li>
                <details className="text-white">
                  <summary>Servicios</summary>
                  <ul className="p-2">
                    {subData.map((item) => (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Innovaciones Nidi</a>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {data.map((item) => (
              <li key={item}>
                <a>{item}</a>
              </li>
            ))}
            <li>
              <details>
                <summary>Servicios</summary>
                <ul className="p-2">
                  {subData.map((item) => (
                    <li className="text-white" key={item}>
                      <a href="">{item}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end pe-2 gap-2">
          <a className="btn btn-sm btn-secondary btn-outline">Iniciar Sesion</a>
          <a className="btn btn-sm btn-secondary btn-outline">Registrase</a>
          <a className="btn btn-sm btn-secondary btn-outline">
            <i className="fa-duotone fa-solid fa-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export { NavBar };
