export default function Sidebar(props: { isShow: boolean }) {
  return (
    <>
      <aside id="dashboard_sidebar">
        <div className="">
          <img src="/images/logo.png" className="logo" alt="" />
        </div>
        <ul className="menu-list">
          <li>
            <a href="#" className="menu-item">
              <i className="icon-dashboard"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <i className="icon-setting"></i> Settings
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
