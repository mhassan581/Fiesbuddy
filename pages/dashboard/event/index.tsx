import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";

export default function DashboardHome() {
  return (
    <>
      <Head>
        <title>Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        <h1>Event</h1>
      </DashboardLayout>
    </>
  );
}
