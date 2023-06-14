import Link from "next/link";
import { useEffect, useState } from "react";
export default function Sidebar(props: { isShow: boolean }) {

  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  

  useEffect(() => {
    const section = document.getElementById("dashboard_layout");
    if (section) {
      if (isActive) {
        section.classList.add('sidebar-collapse');
      } else {
        section.classList.remove('sidebar-collapse');
      }
    }
  }, [isActive]);

  useEffect(() => {
    const section2 = document.getElementById("dashboard_layout");
    const handleResize = () => {
      if (section2) {
        if (window.innerWidth < 768) {
          if (isActive2) {
            section2.classList.add('mobile');
          } else {
            section2.classList.remove('mobile');
            section2.classList.remove('sidebar-collapse');
          }
        }
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
   
  }, [isActive2]);




  return (
    <>
      <button className="humburger" onClick={() => setActive2(!isActive2)}>
        <i className="icon-burger_line_list_menu_nav_icon"></i>
      </button>
      <aside id="dashboard_sidebar">
        <button className="togglebtn" onClick={() => { setActive2(!isActive2); setActive(!isActive); }}><i className="icon-arrow_back_chevron_direction_left_icon"></i></button>
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
              <i className="icon icon-loginlogout"></i>
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
