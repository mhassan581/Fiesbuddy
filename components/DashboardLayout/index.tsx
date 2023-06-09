import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section id="dashboard_layout">
        <Sidebar isShow={true} />
        <main id="dashboard_main">
          <Header userName={"Travis"} hasNotifications={true} />
          <section className="dash_content">{children}</section>
        </main>
      </section>
    </>
  );
}
