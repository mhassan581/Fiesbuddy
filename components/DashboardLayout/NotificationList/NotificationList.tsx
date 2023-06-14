/* eslint-disable @next/next/no-img-element */
import style from "@/styles/dashboard/notificationList.module.scss";
import { useEffect, useState } from "react";
// import Link from "next/link";

export default function NotificationList() {
  const [modalActive, setActiveModal] = useState(false);

  useEffect(() => {
    const sectionModal = document.getElementById("nf_modal");
    if (sectionModal) {
      if (!modalActive) {
        sectionModal.classList.remove('notification_open');
      }
    }
  }, [modalActive]);
  
  return (
    <>
      <div className={style.notification_modal} id="nf_modal">
        <div className={style.notification_body}>
          <div className={style.close} onClick={() => setActiveModal(!modalActive)}>
            <span className={`${style.icon} icon-close`}></span>
          </div>
          <div className={style.header}>
            <h2 className={style.heading}>Notification:</h2>
            <p className={style.mark_read}><i className={`${style.icon} icon-checkdb`}></i> Mark as all read</p>
          </div>
          <ul className={style.notification_list}>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.icon} icon-bell`}></i>
                <p>Lorem Ipsum</p>
              </a>
            </li>


          </ul>
        </div>

      </div>
    </>
  );
}
