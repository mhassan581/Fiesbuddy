import Head from "next/head";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import Calender from "@/components/DashboardLayout/Calender/Calender";

export default function AboutUs() {

  return (
    <>
      <Head>
        <title>Calender | Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
       <Calender/>
      </DashboardLayout>

    </>
  );
}
