import PreLoginLayout from "@/components/PreLoginLayout";
import SocialLogin from "@/components/PreLoginLayout/SocialLogin/SocialLogin";
import style from "@/styles/prelogin/prelogin.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <>
      <PreLoginLayout title={"Welcome Back"}>
        <div className={`${style.form_wrap} form_wrap`}>
          <h1 className={style.form_title}>Hey There, Log In Now!</h1>
          <p className={style.para}>
            Don’t have an account?
            <a href="">
              &nbsp;
              <b>Create New!</b>
            </a>
          </p>
          <form action="" className={style.form}>
            {/* EMAIL */}
            <div className={style.form_group}>
              <label htmlFor="txtEmail">Email*</label>
              <span className={style.icon_group}>
                <input
                  type="email"
                  id="txtEmail"
                  className={`${style.input} form-control`}
                  name="txtEmail"
                  placeholder="email@gmail.com"
                />
                <span className={`${style.icon} icon-email`}></span>
              </span>
            </div>
            {/* PASSWORD */}
            <div className={style.form_group}>
              <label htmlFor="txtEmail">Password*</label>
              <span className={style.icon_group}>
                <input
                  type={isShowPass ? "text" : "password"}
                  id="txtPassword"
                  className={`form-control ${style.input}`}
                  name="txtPassword"
                  placeholder="password"
                />
                <span
                  className={`${style.icon} ${
                    isShowPass ? "icon-eye_slash_icon" : "icon-eye_view_icon"
                  }`}
                  onClick={() => setIsShowPass(!isShowPass)}
                ></span>
              </span>
            </div>
            {/* FORGET PASSWORD */}
            <div className={`${style.form_group} text-right`}>
              <Link href={`#`}>Forget Password?</Link>
            </div>
            {/* SUBMIT / LOGIN */}
            <div className={`${style.form_group}`}>
              <button id="login" className={`${style.btn_submit}`}>
                Login
              </button>
            </div>
          </form>
          {/* SOCIAL LOGIN */}
          <div className={style.form_group}>
            <SocialLogin />
          </div>
        </div>
      </PreLoginLayout>
    </>
  );
}
