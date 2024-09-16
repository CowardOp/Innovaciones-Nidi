import "./navBar.css";

type Props = {
  data: string[];
  subData: string[];
};

const NavBar = ({ data, subData }: Props) => {
  return (
    <>
      <div className="navbar bg-gray-100 text-black">
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
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {data.map((item) => (
                <li key={item}>
                  <a href="" className="text-lg">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <details>
                  <summary className="text-lg">Servicios</summary>
                  <ul className="p-2">
                    {subData.map((subItem) => (
                      <li key={subItem}>
                        <a href="" className="text-lg">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost icono_nav">Innovaciones Nidi</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {data.map((item) => (
              <li key={item}>
                <a href="">{item}</a>
              </li>
            ))}
            <li>
              <details>
                <summary>Servicios</summary>
                <ul className=" bg-base-100 rounded text-white">
                  {subData.map((subItem) => (
                    <li key={subItem}>
                      <a href="">{subItem}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 pe-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary text-lg m-1"
            >
              <i className="fa-regular fa-person-to-portal" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-200 rounded z-[1] w-52 p-2 shadow gap-2"
            >
              <li>
                <a className="btn btn-sm btn-outline btn-primary text-lg">
                  Iniciar Sesion
                </a>
              </li>
              <li>
                <a className="btn btn-sm btn-outline btn-primary text-lg">
                  Registrarse
                </a>
              </li>
              <li>
                <a className="btn btn-sm btn-outline btn-primary text-lg">
                  <i className="fa-regular fa-right-from-bracket"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };
