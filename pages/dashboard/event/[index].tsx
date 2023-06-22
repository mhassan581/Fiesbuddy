import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import React from "react";
import { useRouter } from "next/router";
import FileList from "@/components/DashboardLayout/FileList/FileList";

export default function DashboardHome() {
  const router = useRouter();
  const eventId = router.query.index;

  return (
    <>
      <Head>
        <title>Feis Buddy</title>
      </Head>
      <DashboardLayout>
        <h1>{eventId}</h1>
        <FileList title="Competitors List:" />
      </DashboardLayout>
    </>
  );
}
