import { PropsWithChildren, ReactNode } from "react";
import { useRouter } from "next/router";

export default function PreLoginLayout(props: {
  children: ReactNode;
  title: String;
  styleClass: any;
  onBack: any;
}) {
  const router = useRouter();

  return (
    <>
      <section id="prelogin_layout" className={props.styleClass}>
        <div className="inner_wrapper">
          <div className="visual_wrapper">
            <div className="inner">
              <img src="/images/logo.png" alt="" className="logo" />
              <div className="static-visual">
                <h1 className="title">{props.title}</h1>
                <img src="/images/prelogin_form_visual.png" alt="" />
              </div>
            </div>
            <p className="tagline">© 2023 Powered by Feis Buddy</p>
          </div>
          <div className="form_wrapper">
            {props.children}
            <button
              className="btn_back"
              aria-label="Go Back"
              onClick={() => router.push(props.onBack)}
            ></button>
          </div>
        </div>
      </section>
    </>
  );
}
