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
        <FileList
          title="Competitors List:"
          fileType="64947d60b1254a111359420c"
        />
        <FileList title="Recalls:" fileType="64947e31b1254a1113594219" />
      </DashboardLayout>
    </>
  );
}
