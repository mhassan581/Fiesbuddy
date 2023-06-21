import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Fies Buddy | Admin</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>{<h1>Admin Dashboard</h1>}</DashboardLayout>
    </>
  );
}
