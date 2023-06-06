import Head from "next/head";
import DashboardLayout from "../../components/DashboardLayout";

export default function DashboardHome() {
  return (
    <>
      <Head>
        <title>Fies Buddy</title>
      </Head>
      <DashboardLayout>
        <h1>data</h1>
      </DashboardLayout>
    </>
  );
}
