import style from "@/styles/dashboard/eventTileGrid.module.scss";
import EventTileItem from "../EventTileItem/EventTileItem";
import useSWR from "swr";
import { Key } from "react";

const fetcher = async () => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/6480c2638e4aa6225eaab396",
    {
      //   mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$QvUCIfVAdeNUyx9E1ZlcIuyIOC56xhYsXP//j/KfYTP9de.JoWB3C",
      },
    }
  );
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
        <p>Loading...</p>
      </>
    );
  }
  if (data) {
    // console.log(data.record.events[0].id);

    return (
      <>
        <div className={style.event_tile_grid_wrapper}>
          <h3 className={style.title}>{props.title}</h3>
          <div className={style.event_tiles}>
            {data.record.events.map(
              (ev: {
                id: Key | null | undefined;
                title: String;
                date: String;
                time: String;
                excerpt: String;
              }) => {
                return (
                  <EventTileItem
                    key={ev.id}
                    title={ev.title}
                    eventDate={ev.date}
                    eventTime={ev.time}
                    excerpt={ev.excerpt}
                    image={""}
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
