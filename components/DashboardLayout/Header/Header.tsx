export default function Header(props: {
  userName: String;
  hasNotifications: Boolean;
}) {
  return (
    <>
      <header id="dash_top_header">
        <div className="user_info">
          <div className="avatar">
            <img src="/images/avatar_placeholder.png" alt="" />
          </div>
          <div className="content">
            <h2 className="title">Welcome back, {props.userName}</h2>
            <p className="tag">Everything is organize by your one tap.</p>
          </div>
        </div>
        <div className="search_area">
          <div className="search_field">
            <input
              type="text"
              className="form-control"
              placeholder="Search here...."
            />
            <i className="icon icon-Framesearch"></i>
          </div>
        </div>
        <button
          className={`notification_button ${
            props.hasNotifications ? "has_notifications" : " "
          }`}
          aria-label="Notifications"
        >
          <i className="icon icon-bell"></i>
        </button>
      </header>
    </>
  );
}
