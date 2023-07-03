import Head from "next/head";
import {
  signIn,
  signOut,
  useSession,
  SessionProvider,
  getSession,
} from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ToggleSwitch from "@/components/DashboardLayout/ToggleSwitch/ToggleSwitch";
import { IUser } from "@/types";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Settings | Feis Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <div className="settings">
          <h3 className="heading">Settings:</h3>

          <ul>
            {/* <li>
              <div className="list_item">
                <h4>Notifications</h4>
                <ToggleSwitch />
              </div>
            </li> */}
            <li>
              <Link
                href={"/dashboard/settings/about-us"}
                aria-label="setting"
                className="list_item"
              >
                <h4>About Us</h4>
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/settings/privacy-policy"}
                aria-label="setting"
                className="list_item"
              >
                <h4>Privacy & Policy</h4>
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/settings/terms-and-conditions"}
                aria-label="setting"
                className="list_item"
              >
                <h4>Terms & Conditions</h4>
              </Link>
            </li>
            {/* <li>
              <Link
                href={"/dashboard/settings/help-supports"}
                aria-label="setting"
                className="list_item"
              >
                <h4>Help & Support</h4>
              </Link>
            </li> */}
            {/* <li>
              <Link href={"/dashboard/settings/faq"} aria-label="setting" className="list_item">
                <h4>FAQs</h4>
              </Link>
            </li> */}
          </ul>
        </div>
      </DashboardLayout>
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
