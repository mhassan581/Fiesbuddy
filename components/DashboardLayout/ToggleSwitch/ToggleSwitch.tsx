/* eslint-disable @next/next/no-img-element */
import style from "@/styles/dashboard/toggleSwitch.module.scss";
// import Link from "next/link";



export default function ToggleSwitch () {

    return (
        <>
            <label className={style.toggle}>
                <input className={style.toggle_checkbox} type="checkbox"/>
                <div className={style.toggle_switch}></div>
                {/* <span className={style.toggle_label}>Wi-fi</span> */}
            </label>
        </>
    );
}
