import PreLoginLayout from "@/components/PreLoginLayout";
import style from "@/styles/prelogin/prelogin.module.scss";
import { signIn } from "next-auth/react";
import React from "react";

export default function ForgotPassword() {
  const handleFromSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("email");
  };

  return (
    <>
      <PreLoginLayout
        title={`Lost Your \nPassword?`}
        onBack={"./"}
        styleClass={`forgot_password_layout`}
      >
        {
          <div className={`${style.form_wrap + " " + style.register_form}`}>
            <h1 className={style.form_title}>Forgot Password?</h1>
            <p className={style.para}>
              Don’t worry it happens, Please enter the email address associated
              with your account.
            </p>
            <form action="" onSubmit={handleFromSubmit} className={style.form}>
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
              {/* SUBMIT / LOGIN */}
              <div className={`${style.form_group}`}>
                <button id="login" className={`${style.btn_submit}`}>
                  Continue
                </button>
              </div>
            </form>
          </div>
        }
      </PreLoginLayout>
    </>
  );
}
