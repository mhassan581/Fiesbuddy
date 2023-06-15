import PreLoginLayout from "@/components/PreLoginLayout";
import CustomPassword from "@/components/PreLoginLayout/CustomPassword/CustomPasswordField";
import style from "@/styles/prelogin/prelogin.module.scss";
import errTextStyle from "@/styles/prelogin/errorText.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import FormErrorText from "@/components/PreLoginLayout/FormErrorText/FormErrorText";
import { loginUser } from "@/helpers";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    emailVerified: false,
  });
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      try {
        setLoading(true);
        const apiRes = await axios.post(`/api/auth/signup`, data);

        if (apiRes?.data?.success) {
          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });

          if (loginRes && !loginRes.ok) {
            setSubmitError(loginRes.error || "");
          } else {
            router.push("./dashboard");
          }
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      }
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  return (
    <>
      <PreLoginLayout
        title={`Lets Create An\nAccount`}
        styleClass={`register_layout`}
        onBack={`./`}
      >
        {
          <div
            className={`${style.form_wrap + " " + style.register_form} ${
              loading ? style.loading : " "
            }`}
          >
            <h1 className={style.form_title}>Create an account!</h1>
            <p className={style.para}>
              Already have an account?
              <a href="./">
                &nbsp;
                <b>Log in!</b>
              </a>
            </p>
            <form onSubmit={handleSignUp} className={style.form}>
              {/* USERNAME */}
              <div className={style.form_group}>
                <label htmlFor="name">Username*</label>
                <span className={style.icon_group}>
                  <input
                    type="text"
                    id="name"
                    className={`${style.input} form-control`}
                    name="name"
                    placeholder="Username"
                    required
                    onChange={handleInputChange}
                  />
                  <span className={`${style.icon} icon-frameuser`}></span>
                </span>
              </div>
              {/* EMAIL */}
              <div className={style.form_group}>
                <label htmlFor="email">Email*</label>
                <span className={style.icon_group}>
                  <input
                    type="email"
                    id="email"
                    className={`${style.input} form-control`}
                    name="email"
                    placeholder="email@gmail.com"
                    required
                    onChange={handleInputChange}
                  />
                  <span className={`${style.icon} icon-email`}></span>
                </span>
              </div>
              {/* PASSWORD */}
              <CustomPassword
                placeholder="Password"
                id="password"
                name="password"
                onChange={handleInputChange}
              />
              {/* SUBMIT / REGISTER */}
              <div className={`${style.form_group}`}>
                <button
                  id="register"
                  type="submit"
                  className={`${style.btn_submit}`}
                >
                  Sign Up
                </button>
              </div>
              <div className={style.form_group}>
                {submitError && (
                  <FormErrorText
                    text={submitError}
                    styleClass={errTextStyle.error}
                  />
                )}
              </div>
            </form>
          </div>
        }
      </PreLoginLayout>
    </>
  );
}
