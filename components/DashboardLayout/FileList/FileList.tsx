import style from "@/styles/dashboard/filelist.module.scss";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { iCompList } from "@/types";

export default function FileList(props: { title: string; fileType: string }) {
  const [isActive, setActive] = useState(false);

  const fetcher = async () => {
    let data = {};
    let body = JSON.stringify({
      id: props.fileType as string,
      eid: "649348672a0bac5858c7ac95",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/getfilebycat",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    const req = await axios
      .request(config)
      .then((response: { data: any }) => {
        // console.log(response.data);
        if (response.data.success) {
          data = response.data;
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return data;
  };

  const { data, error } = useSWR(props.fileType as string, fetcher);

  const result = data as iCompList;

  if (error) {
    return (
      <>
        <p>An error occurred</p>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
  if (data) {
    return (
      <>
        <section
          className={`${style.file_list_wrapper} ${
            isActive ? style.active : ""
          }`}
        >
          <div
            className={`${style.title_wrapper}`}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <h1 className={`${style.title}`}>{props.title}</h1>
            <span className={`${style.expand_btn}`}>
              <i
                className={`${style.icon} icon-arrows_bottom_chevron_direction_move_icon`}
              ></i>
            </span>
          </div>
          <div className={`${style.grid_wrapper}`}>
            <ul className={style.grid_list}>
              {result.result.map(
                (ev: { _id: string | null | undefined; title: string }) => {
                  return (
                    <>
                      <li key={ev._id}>
                        {ev.title}
                      </li>
                    </>
                  );
                }
              )}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
