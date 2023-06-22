import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { getSession, useSession } from "next-auth/react";
import { IUser } from "@/types";

export default function AdminDashboard({ data }: any) {
  return (
    <>
      <Head>
        <title>Feis Buddy | Admin</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>{<h1>Admin Dashboard</h1>}</DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  const user = session?.user as IUser;

  if (!session) {
    return {
      redirect: {
        destination: process.env.ADMIN_LOGIN as string,
        permanent: false,
      },
    };
  } else if (session) {
    if (user.userRole !== "feisadmin") {
      return {
        redirect: {
          destination: '/',
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
