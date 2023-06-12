import style from "@/styles/prelogin/prelogin.module.scss";
import { useState } from "react";

export default function CustomPassword(props: { placeholder: string }) {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <>
      <div className={style.form_group}>
        <label htmlFor="txtPassword">Password*</label>
        <span className={style.icon_group}>
          <input
            type={isShowPass ? "text" : "password"}
            id="txtPassword"
            className={`form-control ${style.input}`}
            name="txtPassword"
            placeholder={`${props.placeholder}`}
          />
          <span
            className={`${style.icon} ${
              isShowPass ? "icon-eye_slash_icon" : "icon-eye_view_icon"
            }`}
            onClick={() => setIsShowPass(!isShowPass)}
          ></span>
        </span>
      </div>
    </>
  );
}
