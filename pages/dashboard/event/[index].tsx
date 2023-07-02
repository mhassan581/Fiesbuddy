import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import FileList from "@/components/DashboardLayout/FileList/FileList";
import axios from "axios";
import useSWR from "swr";
import useModal from "@/hooks/UseModal";
import DocumentModal from "@/components/DocumentModal/DocumentModal";
import { IUser } from "@/types";
import { getSession } from "next-auth/react";
import style from "@/styles/dashboard/eventTileGrid.module.scss";
import FormatTime24Hour from "../../../utils/FormatTime24Hour";
import moment from "moment";
import AnnouncementList from "@/components/DashboardLayout/AnnouncementList/AnnouncementList";

export default function DashboardHome() {
  let categories: any = undefined;
  let eventDetails: any = undefined;

  const router = useRouter();
  const eventId = router.query.index;

  const fetchCategories = async () => {
    const req = await axios
      .request({
        method: "get",
        url: "/api/filecategory",
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          categories = response.data.result.map(
            (item: { _id: string; title: string }) => ({
              value: item._id,
              label: item.title,
              // Add or modify other properties as needed
            })
          );
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return categories;
  };
  const { data: category, error: categoryError } = useSWR(
    "categories",
    fetchCategories
  );

  const fetchEventDetails = async () => {
    const req = await axios
      .request({
        method: "POST",
        url: "/api/getsingleevent",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          id: eventId,
        }),
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          eventDetails = response.data.result[0];
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return eventDetails;
  };

  const { data: events, error: eventError } = useSWR(
    "eventDetails",
    fetchEventDetails
  );

  const { isOpen, toggle } = useModal();
  const [documentURL, setDocumentURL] = useState("");

  const url = (url: string) => {
    setDocumentURL(url);
  };
  return (
    <>
      <Head>
        <title>Feis Buddy</title>
      </Head>
      <DashboardLayout>
        {events && (
          <div className={style.event_tile_post}>
            <div className={style.visual}>
              <img src="/images/logo.png" alt="" />
            </div>
            <div className={style.description}>
              <div className={style.title_wrapper}>
                <h1 className={style.title}>{events.title}</h1>
                <ul className={style.social_links}>
                  <li>
                    <a
                      href={`https://www.facebook.com/FeisBuddyy/`}
                      className={style.facebook}
                      aria-label="Facebook"
                      target="_blank"
                    >
                      <i className="icon-fb_facebook_facebook-logo_icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.instagram.com/feisbuddy/`}
                      className={style.instagram}
                      aria-label="Instagram"
                      target="_blank"

                    >
                      <i className="icon-instagram_icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p className={style.meta}>
                <span>
                  <span className={`${style.icon} icon-calender`}></span>
                  <span>
                    {moment(new Date(events.date)).format("DD-MM-YYYY")}
                  </span>
                </span>
                <span>
                  <span className={`${style.icon} icon-clock`}></span>
                  <span>{events.time}</span>
                </span>
              </p>
              <p className={style.excerpt}>{events.description}</p>
            </div>
          </div>
        )}
        {/* <h1>{eventId}</h1> */}
        {/* ANNOUNCEMENT */}
        <AnnouncementList title={`Ball Room Announcements`} />
        {/* FILES */}
        {category &&
          category.map((ev: any, index: any) => {
            return (
              <FileList
                key={index}
                title={ev.label}
                fileType={ev.value}
                url={url}
                showModal={toggle}
                deleteable={false}
              />
            );
          })}
      </DashboardLayout>
      <DocumentModal
        isOpen={isOpen}
        toggle={toggle}
        documentURL={documentURL}
      />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
}
