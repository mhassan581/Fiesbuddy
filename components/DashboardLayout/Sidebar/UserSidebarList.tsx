import Link from "next/link";
import { useRouter } from "next/router";

export default function UserSidebarList() {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <Link
            href="/dashboard/"
            className={router.pathname == "/dashboard" ? "active" : ""}
          >
            <i className="icon-dashboard"></i> Events
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings/"
            className={router.asPath == "/dashboard/settings" ? "active" : ""}
          >
            <i className="icon-setting"></i> Settings
          </Link>
        </li>
      </ul>
    </>
  );
}
