import Head from "next/head";
import {
  signIn,
  signOut,
  useSession,
  SessionProvider,
  getSession,
} from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { IUser } from "@/types";

export default function AboutUs() {
  const [submitError, setSubmitError] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log(data);
  };
  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log(data);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let res = await axios
        .request({
          method: "POST",
          url: "/api/contact",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Response succeeded!");
            setData({
              name: "",
              email: "",
              message: "",
            });
          }
        });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Help & Supports | Feis Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <Link
          href={"/dashboard/settings"}
          aria-label="Back"
          className="backbtn"
        >
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
          Back
        </Link>

        <div className="help_support">
          <h3 className="heading">Help & Supports:</h3>
          <p>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>

          <div className="connect">
            <Link href={"tel:+123456789"} aria-label="Back" className="">
              Call Now: (+1) 123455676
            </Link>
            <Link href={"mail:info@abcd.com"} aria-label="Back" className="">
              Email: info@abcd.com
            </Link>
          </div>

          <h3 className="heading">Share your thoughts:</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="form_row">
              <div className="form_col">
                {/* Name */}
                <div className="form_group">
                  <label htmlFor="name">Name*</label>
                  <span className="icon_group">
                    <input
                      type="text"
                      id="name"
                      className="input form-control"
                      name="name"
                      placeholder="Full Name"
                      required
                      onChange={handleInputChange}
                    />
                    <span className="icon icon-frameuser"></span>
                  </span>
                </div>
              </div>
              <div className="form_col">
                {/* EMAIL */}
                <div className="form_group">
                  <label htmlFor="email">Email*</label>
                  <span className="icon_group">
                    <input
                      type="email"
                      id="email"
                      className="input form-control"
                      name="email"
                      placeholder="email@gmail.com"
                      required
                      onChange={handleInputChange}
                    />
                    <span className="icon icon-email"></span>
                  </span>
                </div>
              </div>
            </div>
            {/* Say something* */}
            <div className="form_group">
              <label htmlFor="message">Message*</label>
              <span className="icon_group">
                <textarea
                  name="message"
                  id="message"
                  className="input form-control"
                  placeholder="Say something*"
                  onChange={handleTextArea}
                  required
                ></textarea>
              </span>
            </div>

            {/* SUBMIT / REGISTER */}
            <div className="form_group">
              <button
                id="submit"
                name="submit"
                type="submit"
                className="btn btn_primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
}
export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
}
