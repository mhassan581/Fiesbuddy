import axios from "axios";
import useSWR from "swr";
import style from "@/styles/dashboard/filelist.module.scss";
import { useRouter } from "next/router";
import convertTime24to12 from "@/utils/FormatTime12Hour";

export default function AnnouncementItem(props: {
  category: string;
  active: boolean;
  isAdmin: boolean;
}) {
  let router = useRouter();
  let announcements: any = undefined;
  const fetchAnnouncements = async () => {
    const req = await axios
      .request({
        method: "POST",
        maxBodyLength: Infinity,
        url: "/api/getannouncebycat",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: props.category,
        },
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          announcements = response.data.result;
        }
        // console.log(announcements);
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return announcements;
  };
  const { data: announcementsData, error: announcementsError } = useSWR(
    props.category as string,
    fetchAnnouncements,
    { refreshInterval: 2000 }
  );
  const handleDelete = async (annID: string) => {
    const confirmDelete = confirm("Do you really want to delete this entry?");

    if (confirmDelete) {
      let request = axios
        .request({
          method: "post",
          maxBodyLength: Infinity,
          url: "/api/deleteannouncement",
          headers: {
            "Content-Type": "application/json",
          },
          data: { id: annID },
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };
  if (announcementsError) {
    return (
      <>
        <p>An error occurred</p>
      </>
    );
  }
  if (!announcementsData) {
    return <></>;
  }
  if (announcementsData) {
    return (
      <>
        <div
          className={`${style.announcements_table_wrapper} ${
            props.active ? style.active : ""
          }`}
        >
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>{`Details`}</th>
                {props.isAdmin && <th>Actions</th>}
              </tr>
            </thead>
            {announcementsData.length > 0 ? (
              announcementsData.map((ev: any, index: any) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{convertTime24to12(ev.time)}</td>
                      <td>{ev.title}</td>
                      {props.isAdmin && (
                        <td>
                          <button
                            onClick={() => {
                              handleDelete(ev._id);
                            }}
                            className="btn btn_danger btn_sm"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  No Data
                </td>
              </tr>
            )}
          </table>
        </div>
      </>
    );
  }
}
