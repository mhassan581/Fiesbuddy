/* eslint-disable @next/next/no-img-element */
import style from "@/styles/dashboard/logoutmodal.module.scss";
import { useEffect, useState } from "react";
// import Link from "next/link";

export default function LogOutModal() {
  const [modalActive, setActiveModal] = useState(false);

  useEffect(() => {
    const sectionModal = document.getElementById("nf_modal");
    if (sectionModal) {
      if (!modalActive) {
        sectionModal.classList.remove('logout_open');
      }
    }
  }, [modalActive]);

  return (
    <>
      <div className={style.logout_modal} id="lg_modal">
        <div className={style.logout_body}>
          <div className={style.logout_content}>
            <h4>Logout!</h4>
            <p>Are you sure you <br />
              want to logout?</p>
            <button className="btn btn_dark">No</button>
            <button className="btn btn_outline">Yes</button>
          </div>
        </div>
      </div>
    </>
  );
}
