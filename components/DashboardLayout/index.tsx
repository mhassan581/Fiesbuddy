import { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import NotificationList from "./NotificationList/NotificationList";
import LogOutModal from "./LogOutModal/LogOutModal";
import { useSession } from "next-auth/react";
import { IUser } from "@/types";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { data: session } = useSession();
  let user;
  if (session) {
    user = session?.user;
  }

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        id="dashboard_layout"
        className={`${isTablet ? "sidebar-collapse" : ""}`}
      >
        <Sidebar isShow={true} />
        <main id="dashboard_main">
          <Header userName={user?.name || ""} hasNotifications={true} />
          <section className="dash_content">{children}</section>
        </main>
        {/* <NotificationList /> */}
        {/* <LogOutModal /> */}
      </section>
    </>
  );
}
