import Head from "next/head";
import DashboardLayout from "../../components/DashboardLayout";
import EventTileGrid from "@/components/DashboardLayout/EventTileGrid/EventTileGrid";

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
