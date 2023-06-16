import Head from "next/head";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

export default function AboutUs() {

  return (
    <>
      <Head>
        <title>Help & Supports | Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <Link href={"/dashboard"} aria-label="Back" className="backbtn">
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
          Back
        </Link>

        <div className="help_support">
          <h3 className="heading">Help & Supports:</h3>
          <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>

          <div className="connect">
            <Link href={"tel:+123456789"} aria-label="Back" className="">Call Now: (+1) 123455676</Link>
            <Link href={"mail:info@abcd.com"} aria-label="Back" className="">Email: info@abcd.com</Link>
          </div>

          <h3 className="heading">Share your thoughts:</h3>
          <form className="form">
            <div className="form_row">
                <div className="form_col">
                  {/* Name */}
                  <div className="form_group">
                    <label htmlFor="name">Name*</label>
                    <span className="icon_group">
                      <input
                        type="text"
                        id="name"
                        className="input form-control"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                      <span className="icon icon-frameuser"></span>
                    </span>
                  </div>
                </div>
                <div className="form_col">
                  {/* EMAIL */}
                  <div className="form_group">
                    <label htmlFor="email">Email*</label>
                    <span className="icon_group">
                      <input
                        type="email"
                        id="email"
                        className="input form-control"
                        name="email"
                        placeholder="email@gmail.com"
                        required
                      />
                      <span className="icon icon-email"></span>
                    </span>
                  </div>
                </div>
            </div>
            {/* Say something* */}
            <div className="form_group">
              <span className="icon_group">
                <textarea name="" id="" className="input form-control" placeholder="Say something*"></textarea>                
              </span>
            </div>

            {/* SUBMIT / REGISTER */}
            <div className="form_group">
              <button
                id="register"
                type="submit"
                className="btn btn_primary"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

      </DashboardLayout>

    </>
  );
}
