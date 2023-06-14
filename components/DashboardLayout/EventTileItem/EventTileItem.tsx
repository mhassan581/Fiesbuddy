/* eslint-disable @next/next/no-img-element */
import style from "@/styles/dashboard/eventTileGrid.module.scss";
import moment from "moment";
import FormatTime24Hour from "../../../utils/FormatTime24Hour";
// import Link from "next/link";

export default function EventTileItem(props: {
  title: String;
  eventDate: Date;
  eventTime: String;
  excerpt: String;
  image: String;
  facebookURL: string;
  twitterURL: string;
  googleURL: string;
}) {
  return (
    <>
      <div className={style.event_tile_item}>
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
              <span>{FormatTime24Hour(props.eventTime)}</span>
            </span>
          </p>
          <p className={style.excerpt}>{props.excerpt}</p>
          <ul className={style.social_links}>
            <li>
              <a
                href={props.facebookURL}
                className={style.facebook}
                aria-label="Facebook"
              >
                <i className="icon-fb_facebook_facebook-logo_icon-1"></i>
              </a>
            </li>
            <li>
              <a
                href={props.twitterURL}
                className={style.twitter}
                aria-label="Twitter"
              >
                <i className="icon-twitter_bird_icon-1"></i>
              </a>
            </li>
            <li>
              <a
                href={props.googleURL}
                className={style.google}
                aria-label="Twitter"
              >
                <i className="icon-google_brand_branding_logo_network_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
