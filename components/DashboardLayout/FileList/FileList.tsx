import style from "@/styles/dashboard/filelist.module.scss";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:3000/api/filecategory`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default function FileList(props: { title: string }) {
  const { data, error } = useSWR("filecategory", fetcher);
  console.log(data);

  return (
    <>
      <section className={`${style.file_list_wrapper}`}>
        <div className={`${style.title_wrapper}`}>
          <h1 className={`${style.title}`}>{props.title}</h1>
          <span className={`${style.expand_btn}`}>
            <i
              className={`${style.icon} icon-arrows_bottom_chevron_direction_move_icon`}
            ></i>
          </span>
        </div>
        <div className={`${style.grid_wrapper}`}></div>
      </section>
    </>
  );
}
