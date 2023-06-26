import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { getSession, useSession } from "next-auth/react";
// import Select from "react-select";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { IUser } from "@/types";

export default function AddFile() {
  let events: any = undefined;
  let categories: any = undefined;
  const fetchEvents = async () => {
    const req = await axios
      .request({
        method: "get",
        url: "/api/events",
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          events = response.data.result.map(
            (item: { _id: string; title: string }) => ({
              value: item._id,
              label: item.title,
              // Add or modify other properties as needed
            })
          );
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return events;
  };
  const { data: eventsCategory, error: eventsError } = useSWR(
    "events",
    fetchEvents
  );

  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const fetchCategories = async () => {
    const req = await axios
      .request({
        method: "get",
        url: "/api/filecategory",
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          categories = response.data.result.map(
            (item: { _id: string; title: string }) => ({
              value: item._id,
              label: item.title,
              // Add or modify other properties as needed
            })
          );
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return categories;
  };
  const { data: categoriesData, error: categoriesError } = useSWR(
    "categories",
    fetchCategories
  );

  const [data, setData] = useState({
    file: "",
    eventID: "649348672a0bac5858c7ac95",
    title: "",
    fileCategory: false,
  });
  const [submitError, setSubmitError] = useState<string>("");
  const [pageLoading, setLoading] = useState(false);

  const [file, setFile] = useState<any>(null);
  const [uploadingStatus, setUploadingStatus] = useState<boolean>(false);

  const handleFormSubmit = async () => {
    setUploadingStatus(true);

    let { data: fileData } = await axios.post("/api/s3fileupload", {
      ...data,
      name: file.name,
      type: file.type,
    });

    const url = fileData.url;
    await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadingStatus(false);
    setFile(null);
  };
  useEffect(() => {
    if (file) {
      const uploadedFileDetail = async () => await handleFormSubmit();
      uploadedFileDetail();
    }
  }, [file]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
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
          <div className="profile">
            <h2 className="heading">Add File</h2>

            <form onSubmit={handleFormSubmit} className="form">
              <div className="form_group">
                <label htmlFor="title">Add Title*</label>
                <input
                  type="text"
                  name="title"
                  className="input form-control"
                  required
                  placeholder="Men 20 & Over"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form_row">
                <div className="form_col">
                  {/* EVENT */}
                  <div className="form_group">
                    <label htmlFor="name">Select Event*</label>
                    <span className="icon_group">
                      <select
                        className="input form-control select-dropdown"
                        style={{ width: "100%" }}
                        required
                        name="eventID"
                        onChange={handleSelectChange}
                      >
                        {eventsCategory &&
                          eventsCategory.map((ev: any, index: number) => {
                            return (
                              <option key={index} value={ev.value}>
                                {ev.label}
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
                    <label htmlFor="email">Select File Category*</label>
                    <span className="icon_group">
                      <select
                        className="input form-control select-dropdown"
                        style={{ width: "100%" }}
                        required
                        name="fileCategory"
                        onChange={handleSelectChange}
                      >
                        <option disabled selected>
                          Select Option
                        </option>
                        {categoriesData &&
                          categoriesData.map((ev: any, index: number) => {
                            return (
                              <option key={index} value={ev.value}>
                                {ev.label}
                              </option>
                            );
                          })}
                      </select>
                      <span className="icon icon-rresult"></span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Say something* */}
              <div className="form_group">
                <label htmlFor="file">Select File*</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={(e: any) => setFile(e.target.files[0])}
                  required
                />
              </div>
              {/* SUBMIT / REGISTER */}
              <div
                className="form_group"
                style={{ marginTop: "1em", width: "100%" }}
              >
                <button id="register" type="submit" className="btn btn_primary">
                  Submit
                </button>
              </div>
            </form>
            {submitError && submitError}
          </div>
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
