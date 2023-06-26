import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminSideBarList() {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <Link
            href="/admin"
            className={router.pathname == "/admin" ? "active" : ""}
          >
            <i className="icon-competitor"></i>Upload File
          </Link>
        </li>
        <li>
          <a
            href="/admin/edit-file"
            className={router.pathname == "/admin/edit-file" ? "active" : ""}
          >
            <i className="icon-rresult"></i>Edit File
          </a>
        </li>
      </ul>
    </>
  );
}
