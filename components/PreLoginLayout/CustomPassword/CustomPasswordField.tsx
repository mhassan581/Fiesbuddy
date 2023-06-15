import style from "@/styles/prelogin/prelogin.module.scss";
import { useState } from "react";

export default function CustomPassword(props: {
  placeholder: string;
  name: string;
  id: string;
  onChange: any;
}) {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <>
      <div className={style.form_group}>
        <label htmlFor="txtPassword">Password*</label>
        <span className={style.icon_group}>
          <input
            type={isShowPass ? "text" : "password"}
            id={props.id}
            className={`form-control ${style.input}`}
            name={props.name}
            placeholder={`${props.placeholder}`}
            
            onChange={props.onChange}
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
