import Head from "next/head";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ToggleSwitch from "@/components/DashboardLayout/ToggleSwitch/ToggleSwitch";

export default function AboutUs() {

  return (
    <>
      <Head>
        <title>Settings: | Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>


        <div className="settings">
          <h3 className="heading">Settings:</h3>

          <ul>
            <li>
              <div className="list_item">
                <h4>Notifications</h4>
                <ToggleSwitch />
              </div>
            </li>
            <li>
              <Link href={"/dashboard/aboutus"} aria-label="setting" className="list_item">
                <h4>About Us</h4>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/privacy_policy"} aria-label="setting" className="list_item">
                <h4>Privacy & Policy</h4>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/terms_and_onditions"} aria-label="setting" className="list_item">
                <h4>Terms & Conditions</h4>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/help_supports"} aria-label="setting" className="list_item">
                <h4>Help & Support</h4>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/faq"} aria-label="setting" className="list_item">
                <h4>FAQs</h4>
              </Link>
            </li>
          </ul>
        </div>

      </DashboardLayout>

    </>
  );
}
