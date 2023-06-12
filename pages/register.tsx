import PreLoginLayout from "@/components/PreLoginLayout";
import CustomPassword from "@/components/PreLoginLayout/CustomPassword/CustomPasswordField";
import style from "@/styles/prelogin/prelogin.module.scss";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <PreLoginLayout
        title={`Lets Create An\nAccount`}
        styleClass={`register_layout`}
        onBack={`./`}
      >
        {
          <div className={`${style.form_wrap + " " + style.register_form}`}>
            <h1 className={style.form_title}>Create an account!</h1>
            <p className={style.para}>
              Already have an account?
              <a href="./">
                &nbsp;
                <b>Log in!</b>
              </a>
            </p>
            <form action="" className={style.form}>
              {/* USERNAME */}
              <div className={style.form_group}>
                <label htmlFor="txtUserName">Username*</label>
                <span className={style.icon_group}>
                  <input
                    type="text"
                    id="txtUserName"
                    className={`${style.input} form-control`}
                    name="txtUserName"
                    placeholder="Username"
                  />
                  <span className={`${style.icon} icon-frameuser`}></span>
                </span>
              </div>
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
              <CustomPassword placeholder="Password"/>
              {/* SUBMIT / LOGIN */}
              <div className={`${style.form_group}`}>
                <button id="login" className={`${style.btn_submit}`}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        }
      </PreLoginLayout>
    </>
  );
}
