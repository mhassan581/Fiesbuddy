import Head from "next/head";
import DashboardLayout from "@/components/DashboardLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import FileList from "@/components/DashboardLayout/FileList/FileList";
import axios from "axios";
import useSWR from "swr";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import DocumentModal from "@/components/DocumentModal/DocumentModal";
import useModal from "@/hooks/UseModal";
import { getSession } from "next-auth/react";
import { IUser } from "@/types";

export default function DashboardHome() {
  const router = useRouter();
  const eventId = router.query.index;
  let categories: any = undefined;
  const { isOpen, toggle } = useModal();
  const [documentURL, setDocumentURL] = useState("");

  const fetchCategories = async () => {
    const req = await axios
      .request({
        method: "get",
        url: "/api/filecategory",
      })
      .then((response: { data: any }) => {
        if (response.data.success) {
          categories = response.data.result.map(
            (item: { _id: string; title: string }) => ({
              value: item._id,
              label: item.title,
              // Add or modify other properties as needed
            })
          );
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return categories;
  };
  const { data: category, error: categoryError } = useSWR(
    "categories",
    fetchCategories
  );

  const url = (url: string) => {
    setDocumentURL(url);
  };

  return (
    <>
      <Head>
        <title>Feis Buddy</title>
      </Head>
      <DashboardLayout>
        <h1 onClick={toggle}>{eventId}</h1>
        {/* <FileList
          title="Competitors List:"
          fileType="64947d60b1254a111359420c"
        />
        <FileList title="Recalls:" fileType="64947e31b1254a1113594219" /> */}
        {category &&
          category.map((ev: any, index: any) => {
            return (
              <FileList
                key={index}
                title={ev.label}
                fileType={ev.value}
                url={url}
                showModal={toggle}
                deleteable={true}
              />
            );
          })}
      </DashboardLayout>
      <DocumentModal
        isOpen={isOpen}
        toggle={toggle}
        documentURL={documentURL}
      />
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
          destination: "/",
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
