import style from "@/styles/prelogin/sociallogin.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
  return (
    <>
      <div className={style.social_login}>
        <p className={style.title}>
          <span className={style.text}>Or sign in with email</span>
        </p>
        <ul className={style.login_options}>
          {/* FACEBOOK */}
          <li>
            <Link
              href={`#`}
              className={style.facebook}
              aria-label="Login with Facebook"
            >
              <i className="icon-fb_facebook_facebook-logo_icon-1"></i>
            </Link>
          </li>
          {/* TWITTER */}
          <li>
            <Link
              href={`#`}
              className={style.twitter}
              aria-label="Login with Twitter"
            >
              <i className="icon-twitter_bird_icon-1"></i>
            </Link>
          </li>
          {/* GOOGLE */}
          <li>
            <Link
              href={``}
              className={style.twitter}
              aria-label="Login with Twitter"
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <i className="icon-google_brand_branding_logo_network_icon">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
