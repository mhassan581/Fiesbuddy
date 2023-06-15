import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import FaqList from "@/components/DashboardLayout/Faq/Faq";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

export default function Faqs() {
  const { data: session, status: loading } = useSession();
  console.log({ session, loading });

  return (
    <>
      <Head>
        <title>Faq's | Fies Buddy</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0091ff" />
      </Head>
      <DashboardLayout>
        {<FaqList title={"Events List:"} />}
      </DashboardLayout>
        
    </>
  );
}
