import Link from "next/link";
export default function Sidebar(props: { isShow: boolean }) {
  return (
    <>
      <aside id="dashboard_sidebar">
        <nav>
          <div className="nav_brand">
            <Link href={"/dashboard"} aria-label="Dashboard Home">
              <img src="/images/logo.png" className="logo" alt="" />
            </Link>
          </div>
          <div className="nav_list">
            <ul>
              <li>
                <a href="#" className="active">
                  <i className="icon-dashboard"></i> Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-setting"></i> Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="logout">
            <button>
              <i className="icon-logout"></i>Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
