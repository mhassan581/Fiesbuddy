import Head from "next/head";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

export default function AboutUs() {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <>
      <Head>
        <title>Profile | Feis Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <Link href={"/dashboard"} aria-label="Back" className="backbtn">
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
          Back
        </Link>

        <div className="profile">
          <h3 className="heading">Profile</h3>

          <form className="form">
            <div className="user_info">
              <div className="avatar">
                <img src="/images/avatar_placeholder.png" alt="" />
              </div>
              <div className="upload">
                <input type="file" />
                <i className="icon-camera_capture_photo_icon"></i>
              </div>
            </div>

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
                    />
                    <span className="icon icon-email"></span>
                  </span>
                </div>
              </div>
              <div className="form_col">
                {/* Password */}
                <div className="form_group">
                  <label htmlFor="email">Password*</label>
                  <span className="icon_group">
                    <input
                      type="password"
                      className="input form-control"
                      name="email"
                      placeholder="Password"
                      required
                    />
                    <span
                      className={`icon ${isShowPass ? "icon-eye_slash_icon" : "icon-eye_view_icon"}`}
                      onClick={() => setIsShowPass(!isShowPass)}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="form_col">
                {/* Address */}
                <div className="form_group">
                  <label htmlFor="name">Address*</label>
                  <span className="icon_group">
                    <input
                      type="text"
                      id="name"
                      className="input form-control"
                      name="name"
                      placeholder="Address"
                      required
                    />
                    <span className="icon icon-frameuser"></span>
                  </span>
                </div>
              </div>
            </div>
            {/* Say something* */}
            <div className="form_group">
              <span className="icon_group">
                <textarea name="" id="" className="input form-control" placeholder="Say something*"></textarea>
              </span>
            </div>

            {/* SUBMIT / REGISTER */}
            <div className="form_group">
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

      </DashboardLayout>

    </>
  );
}
