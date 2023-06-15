import PreLoginLayout from "@/components/PreLoginLayout";
import CustomPassword from "@/components/PreLoginLayout/CustomPassword/CustomPasswordField";
import style from "@/styles/prelogin/prelogin.module.scss";
import { useState } from "react";

export default function NewPassword() {
  return (
    <>
      <PreLoginLayout
        title={`Create New \nPassword`}
        styleClass={`new_password_layout`}
        onBack={"./"}
      >
        <div className={`${style.form_wrap + " " + style.register_form}`}>
          <h1 className={style.form_title}>Create Your New Password!</h1>
          <form action="" className={style.form}>
            {/* PASSWORD 1*/}
            <CustomPassword
              placeholder="Password"
              id="password"
              name="password"
            />
            {/* CONFIRM PASSWORD */}
            <CustomPassword
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
            />
            {/* SUBMIT / LOGIN */}
            <div className={`${style.form_group}`}>
              <button id="login" className={`${style.btn_submit}`}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </PreLoginLayout>
    </>
  );
}
