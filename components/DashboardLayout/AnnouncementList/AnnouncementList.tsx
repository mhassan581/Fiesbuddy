import style from "@/styles/dashboard/filelist.module.scss";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { iAnnouncement } from "@/types";
import AnnouncementItem from "./AnnouncementItems";

export default function AnnouncementList(props: { title: string }) {
  const [isActive, setActive] = useState(true);
  const [currentTab, setCurrentTab] = useState("64a162f07ed039c5c002010c");
  let categories: any = undefined;
  const fetchCategories = async () => {
    const req = await axios
      .request({
        method: "get",
        url: "/api/annoucnmentCat",
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          categories = response.data.result;
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return categories;
  };
  const { data: category, error: categoryError } = useSWR(
    "announcementCategories",
    fetchCategories
  );
  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.id);
  };

  if (categoryError) {
    return (
      <>
        <p>An error occurred</p>
      </>
    );
  }
  if (!category) {
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
            <h1 className={`${style.title}`}>Loading...</h1>
          </div>
        </section>
      </>
    );
  }
  if (category) {
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
            <div className={style.tab_layout}>
              <div className={style.button_layout}>
                {category &&
                  category.map(
                    (ev: { _id: string; title: string }, index: any) => {
                      return (
                        <>
                          <button
                            key={index}
                            id={ev._id}
                            className={style.tab_button}
                            disabled={currentTab === `${ev._id}`}
                            onClick={handleTabClick}
                          >
                            {ev.title}
                          </button>
                        </>
                      );
                    }
                  )}
              </div>
              <div className={style.tab_content}>
                {category &&
                  category.map((ev: { _id: string }, index: any) => {
                    return (
                      <>
                        <AnnouncementItem
                          key={index}
                          active={currentTab === `${ev._id}`}
                          category={ev._id}
                          isAdmin={false}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
