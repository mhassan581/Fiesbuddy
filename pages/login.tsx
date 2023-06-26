import PreLoginLayout from "@/components/PreLoginLayout";
import CustomPassword from "@/components/PreLoginLayout/CustomPassword/CustomPasswordField";
import SocialLogin from "@/components/PreLoginLayout/SocialLogin/SocialLogin";
import { loginUser } from "@/helpers";
import style from "@/styles/prelogin/prelogin.module.scss";
import errorStyle from "@/styles/prelogin/errorText.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AxiosError } from "axios";
import FormErrorText from "@/components/PreLoginLayout/FormErrorText/FormErrorText";

export default function Login() {
  const [isShowPass, setIsShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        setSubmitError(loginRes.error || "");
      } else {
        setSubmitError("");
        router.push("./dashboard");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <PreLoginLayout
        title={"Welcome To \n Feis Buddy"}
        styleClass={`login_layout ${loading ? "loading" : ""}`}
        onBack={``}
      >
        <div className={`${style.form_wrap + " " + style.login_form}`}>
          <h1 className={style.form_title}>Get Started</h1>
          <p className={style.para}>Enter your details below and access event details</p>
          {/* <p className={style.para}>
            Don’t have an account?
            <Link href="/register">
              &nbsp;
              <b>Create New!</b>
            </Link>
          </p> */}
          <form action="" onSubmit={handleLogin} className={style.form}>
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
                  required
                  onChange={handleEmailChange}
                />
                <span className={`${style.icon} icon-email`}></span>
              </span>
            </div>
            {/* PASSWORD */}
            <CustomPassword
              placeholder="Password"
              name="txtPassword"
              id="txtPassword"
              onChange={handlePasswordChange}
            />
            {/* FORGET PASSWORD */}
            {/* <div className={`${style.form_group} text-right`}>
              <Link href={`./forgot-password`}>Forget Password?</Link>
            </div> */}
            {/* SUBMIT / LOGIN */}
            <div className={`${style.form_group}`}>
              <button id="login" className={`${style.btn_submit}`}>
                Start
              </button>
            </div>
            <div className={style.form_group}></div>
            {/* SUBMIT ERROR */}
            <div className={style.form_group}>
              {!loading && (
                <FormErrorText
                  text={submitError}
                  styleClass={errorStyle.error}
                />
              )}
            </div>
          </form>
          {/* SOCIAL LOGIN */}
          {/* <div className={style.form_group}>
            <SocialLogin />
          </div> */}
        </div>
      </PreLoginLayout>
    </>
  );
}
