import style from "@/styles/dashboard/eventTileGrid.module.scss";
import moment from "moment";

export default function EventTileItem(props: {
  title: String;
  eventDate: String;
  eventTime: String;
  excerpt: String;
  image: String;
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
              <i className="icon-calender"></i>
              <span>
                {props.eventDate
                  ? moment(props.eventDate).format("DD-MM-YYYY")
                  : null}
              </span>
            </span>
            <span className={style.time}></span>
          </p>
        </div>
      </div>
    </>
  );
}
