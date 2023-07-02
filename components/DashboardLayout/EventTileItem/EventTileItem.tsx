/* eslint-disable @next/next/no-img-element */
import style from "@/styles/dashboard/eventTileGrid.module.scss";
import moment from "moment";
import FormatTime24Hour from "../../../utils/FormatTime24Hour";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EventTileItem(props: {
  id: String;
  title: String;
  eventDate: Date;
  eventTime: String;
  excerpt: String;
  image: String;
  facebookURL: string;
  instaURL: string;
}) {
  const router = useRouter();
  const handleItemClick = (eventId: string) => {
    router.push(`/dashboard/event/${eventId}`);
  };
  return (
    <>
      <div
        onClick={() => {
          handleItemClick(props.id as string);
        }}
        className={style.event_tile_item}
      >
        <div className={style.visual}>
          <img
            src={`/images/${props.image ? props.image : "placeholder.png"}`}
            alt=""
          />
        </div>
        <div className={style.description}>
          <h4 className={style.title}>{props.title}</h4>
          <p className={style.meta}>
            <span className={style.date}>
              <i className={`${style.icon} icon-calender`}></i>
              <span>
                {props.eventDate
                  ? moment(new Date(props.eventDate)).format("DD-MM-YYYY")
                  : null}
              </span>
            </span>
            <span className={style.time}>
              <i className={`${style.icon} icon-clock`}></i>
              <span>{props.eventTime}</span>
            </span>
          </p>
          <p className={style.excerpt}>{props.excerpt}</p>
          <ul className={style.social_links}>
            <li>
              <a
                href={props.facebookURL}
                className={style.facebook}
                aria-label="Facebook"
                target="_blank"
              >
                <i className="icon-fb_facebook_facebook-logo_icon-1"></i>
              </a>
            </li>
            <li>
              <a
                href={props.instaURL}
                className={style.instagram}
                aria-label="Instagram"
                target="_blank"
              >
                <i className="icon-instagram_icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
