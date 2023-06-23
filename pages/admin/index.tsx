import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { getSession, useSession } from "next-auth/react";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { IUser, iFileType } from "@/types";

export default function AddFile() {
  const fetchCategory = async () => {
    let category = {};
    const req = await axios
      .request({
        method: "get",
        url: "/api/filecategory",
      })
      .then((response: { data: any }) => {
        // console.log(response.data);
        if (response.data.success) {
          category = response.data;
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return category;
  };

  const [selectedOption, setSelectedOption] = useState("");

  const { data, error } = useSWR("categories", fetchCategory);

  // const result = data as iFileType;

  // const optionsCategory = result.result.map(
  //   (item: { _id: string; title: string }) => ({
  //     value: item._id,
  //     label: item.title,
  //     // Add or modify other properties as needed
  //   })
  // );
  // console.log(optionsCategory);

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

            <form className="form">
              <div className="form_group">
                <label htmlFor="title">Add Title*</label>
                <input
                  type="text"
                  name="title"
                  className="input form-control"
                  required
                  placeholder="Men 20 & Over"
                />
              </div>
              <div className="form_row">
                <div className="form_col">
                  {/* EVENT */}
                  <div className="form_group">
                    <label htmlFor="name">Select Event*</label>
                    <span className="icon_group">
                      <input
                        type="text"
                        id="name"
                        className="input form-control"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                      <span className="icon icon-frameuser"></span>
                    </span>
                  </div>
                </div>

                <div className="form_col">
                  {/* FILE CATEGORY */}
                  <div className="form_group">
                    <label htmlFor="email">Select File Category*</label>
                    <span className="icon_group">
                      <Select
                        defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        // options={optionsCategory}
                        className="select-dropdown"
                        classNamePrefix="inner-select"
                      />
                      <span className="icon icon-email"></span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Say something* */}
              <div className="form_group">
                <input type="file" />
              </div>

              {/* SUBMIT / REGISTER */}
              <div className="form_group">
                <button id="register" type="submit" className="btn btn_primary">
                  Submit
                </button>
              </div>
            </form>
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
