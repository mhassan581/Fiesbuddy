import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import FaqList from "@/components/DashboardLayout/Faq/Faq";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import Link from "next/link";

export default function Faqs() {
  const { data: session, status: loading } = useSession();
  console.log({ session, loading });

  return (
    <>
      <Head>
        <title>Faq's | Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <Link href={"/dashboard"} aria-label="Back" className="backbtn">
          <i className="icon-arrow_back_chevron_direction_left_icon"></i>
          Back
        </Link>
        <FaqList />
      </DashboardLayout>

    </>
  );
}
