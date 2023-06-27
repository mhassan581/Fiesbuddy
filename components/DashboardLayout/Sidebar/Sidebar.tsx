import Link from "next/link";
import { useEffect, useState } from "react";
import UserSidebarList from "./UserSidebarList";
import { signOut, useSession } from "next-auth/react";
import AdminSideBarList from "./AdminSidebarList";
import { IUser } from "@/types";

export default function Sidebar(props: { isShow: boolean }) {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);

  const { data: session, status: loading } = useSession();

  const user = session?.user as IUser;

  const RenderAdminList = () => {
    if (session) {
      if (user.userRole === "feisadmin") {
        return (
          <>
            <AdminSideBarList />
          </>
        );
      }
    } else {
      return (
        <>
          <UserSidebarList />
        </>
      );
    }
  };

  const RenderLogoutButton = () => {
    if (session) {
      if (user.userRole === "feisadmin") {
        return (
          <>
            <div className="logout">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  signOut({
                    callbackUrl: "https://app.feisbuddy.com/admin",
                  });
                }}
              >
                <i className="icon icon-loginlogout"></i>
                Logout
              </button>
            </div>
          </>
        );
      }
    }
  };

  useEffect(() => {
    const section = document.getElementById("dashboard_layout");
    if (section) {
      if (isActive) {
        section.classList.add("sidebar-collapse");
      } else {
        section.classList.remove("sidebar-collapse");
      }
    }
  }, [isActive]);

  useEffect(() => {
    const section2 = document.getElementById("dashboard_layout");
    const handleResize = () => {
      if (section2) {
        if (window.innerWidth < 768) {
          if (isActive2) {
            section2.classList.add("mobile");
          } else {
            section2.classList.remove("mobile");
            section2.classList.remove("sidebar-collapse");
          }
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isActive2]);

  return (
    // UPDATED LOGOUT BUTTON REDIRECT
    <>
      <button
        className="humburger"
        onClick={() => setActive2(!isActive2)}
        aria-label="Toggle Sidebar"
      >
        <i className="icon-burger_line_list_menu_nav_icon"></i>
      </button>
      <aside id="dashboard_sidebar">
        <button
          className="togglebtn"
          onClick={() => {
            setActive2(!isActive2);
            setActive(!isActive);
          }}
          aria-label="Toggle Sidebar"
        >
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
        </button>
        <nav>
          <div className="nav_brand">
            <Link href={"/"} aria-label="Dashboard Home">
              <img src="/images/logo.png" className="logo" alt="" />
            </Link>
          </div>
          <div className="nav_list">{<RenderAdminList />}</div>
          <RenderLogoutButton />
        </nav>
      </aside>
    </>
  );
}
