import style from "@/styles/dashboard/eventTileGrid.module.scss";
import EventTileItem from "../EventTileItem/EventTileItem";
import useSWR from "swr";
import { Key } from "react";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/events", {
    //   mode: "no-cors",
    // headers: {
    //   "Content-Type": "application/json",
    //   "X-Master-Key":
    //     "$2b$10$QvUCIfVAdeNUyx9E1ZlcIuyIOC56xhYsXP//j/KfYTP9de.JoWB3C",
    // },
  });
  const data = await response.json();
  return data;
};

export default function EventTileGrid(props: { title: String }) {
  const { data, error } = useSWR("events", fetcher);

  if (error) {
    return (
      <>
        <p>An error occurred</p>;
      </>
    );
  }
  if (!data) {
    return (
      <>
        <div
          className={`${style.event_tile_grid_wrapper + " " + style.loading} `}
        >
          <h3 className={`${style.title} heading`}>{props.title}</h3>
          <div className={style.event_tiles}>
            {[...Array(6)].map((ev, index) => {
              return (
                <EventTileItem
                  id={``}
                  key={index}
                  title={``}
                  excerpt={``}
                  eventDate={new Date()}
                  eventTime={``}
                  image={``}
                  facebookURL={`#`}
                  twitterURL={`#`}
                  googleURL={`#`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
  if (data) {
    return (
      <>
        <div className={style.event_tile_grid_wrapper}>
          <h3 className={`${style.title} heading`}>{props.title}</h3>
          <div className={style.event_tiles}>
            {data.result.map(
              (ev: {
                _id: Key | null | undefined;
                title: String;
                date: Date;
                time: String;
                description: String;
              }) => {
                return (
                  <EventTileItem
                    id={ev._id as string}
                    key={ev._id}
                    title={ev.title}
                    eventDate={ev.date}
                    eventTime={ev.time}
                    excerpt={ev.description}
                    image={"/sample-images/event_3.png"}
                    facebookURL={`#`}
                    twitterURL={`#`}
                    googleURL={`#`}
                  />
                );
              }
            )}
          </div>
        </div>
      </>
    );
  }
  return <>null</>;
}
