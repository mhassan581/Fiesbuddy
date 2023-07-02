import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { getSession, useSession } from "next-auth/react";
// import Select from "react-select";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { IUser } from "@/types";
import { useRouter } from "next/router";
import AbsoluteLoader from "@/components/AbsoluteLoader/AbsoluteLoader";
import AnnouncementItem from "@/components/DashboardLayout/AnnouncementList/AnnouncementItems";
import style from "@/styles/dashboard/filelist.module.scss";

export default function ManageAnnouncements() {
  const router = useRouter();
  const [isActive, setActive] = useState(true);
  const [currentTab, setCurrentTab] = useState("64a162f07ed039c5c002010c");
  let categories: any = undefined;
  const fetchCategories = async () => {
    const req = await axios
      .request({
        method: "GET",
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
    "categories",
    fetchCategories
  );
  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.id);
  };
  const renderAnnouncementsTable = () => {
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
              <h1 className={`${style.title}`}>{`Manage Announcement`}</h1>
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
                            isAdmin={true}
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
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState();
  const [data, setData] = useState({
    title: "",
    category: "64a162f07ed039c5c002010c",
    time: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log(data);
  };
  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log(data);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      let res = await axios
        .request({
          method: "POST",
          url: "/api/announcement",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        })
        .then((response) => {
          if (response.status === 201) {
            // console.log("Response succeeded!");push
            setData({
              title: "",
              category: "",
              time: "",
            });
            setLoading(false);
            router.reload();
          }
        });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Feis Buddy | Admin</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        {
          <section className="manage_announcements">
            <div className="make-announcement">
              <h1 className="heading-1">Make an Announcement</h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="form_row">
                  <div className="form_col">
                    {/* EVENT */}
                    <div className="form_group">
                      <label htmlFor="category">Select Ballroom*</label>
                      <span className="icon_group">
                        <select
                          className="input form-control select-dropdown"
                          style={{ width: "100%" }}
                          required
                          name="category"
                          id="category"
                          onChange={handleSelectChange}
                        >
                          {category &&
                            category.map((ev: any, index: number) => {
                              return (
                                <option key={index} value={ev._id}>
                                  {ev.title}
                                </option>
                              );
                            })}
                        </select>
                        <span className="icon icon-setting"></span>
                      </span>
                    </div>
                  </div>

                  <div className="form_col">
                    {/* FILE CATEGORY */}
                    <div className="form_group">
                      <label htmlFor="time">Select File Category*</label>
                      <span className="icon_group">
                        <input
                          type="time"
                          name="time"
                          id="time"
                          className="input form-control"
                          required
                          onChange={handleInputChange}
                        />
                        <span className="icon icon-rresult"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form_group">
                  <label htmlFor="title">Announcement Text</label>
                  <textarea
                    name="title"
                    className="input form-control"
                    id="title"
                    required
                    placeholder="Announcement text"
                    onChange={handleTextArea}
                  ></textarea>
                </div>
                <div
                  className="form_group"
                  style={{ marginTop: "1em", width: "100%" }}
                >
                  <button
                    id="register"
                    type="submit"
                    className="btn btn_primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {renderAnnouncementsTable()}
          </section>
        }
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (!session) {
    return {
      redirect: {
        destination: process.env.ADMIN_LOGIN as string,
        permanent: false,
      },
    };
  } else if (session) {
    if (user.userRole !== "feisadmin") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      session,
      data: session,
    },
  };
}
