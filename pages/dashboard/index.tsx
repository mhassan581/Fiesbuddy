import Head from "next/head";
import DashboardLayout from "../../components/DashboardLayout";
import EventTileGrid from "@/components/DashboardLayout/EventTileGrid/EventTileGrid";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

export default function DashboardHome() {
  const { data: session, status: loading } = useSession();
  console.log({ session, loading });

  return (
    <>
      <Head>
        <title>Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        {<EventTileGrid title={"Events List:"} />}
      </DashboardLayout>
    </>
  );
}
