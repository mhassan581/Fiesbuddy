import Head from "next/head";
import DashboardLayout from "../components/DashboardLayout";
import EventTileGrid from "@/components/DashboardLayout/EventTileGrid/EventTileGrid";
import { getSession } from "next-auth/react";
import { IUser } from "@/types";

export default function DashboardHome() {
  return (
    <>
      <Head>
        <title>Feis Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        {<EventTileGrid title={"Events List:"} />}
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (session) {
    if (user.userRole === "feisadmin") {
      return {
        redirect: {
          destination: "/admin",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      session,
      data: session,
    },
  };
}
