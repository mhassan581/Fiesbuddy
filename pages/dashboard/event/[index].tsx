import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import FileList from "@/components/DashboardLayout/FileList/FileList";
import axios from "axios";
let categories: any = undefined;
import useSWR from "swr";
import useModal from "@/hooks/UseModal";
import DocumentModal from "@/components/DocumentModal/DocumentModal";

export default function DashboardHome() {
  const router = useRouter();
  const eventId = router.query.index;

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
  const { isOpen, toggle } = useModal();
  const [documentURL, setDocumentURL] = useState("");

  const url = (url: string) => {
    setDocumentURL(url);
  };
  return (
    <>
      <Head>
        <title>Feis Buddy</title>
      </Head>
      <DashboardLayout>
        {/* <h1>{eventId}</h1> */}
        {category &&
          category.map((ev: any, index: any) => {
            return (
              <FileList
                key={index}
                title={ev.label}
                fileType={ev.value}
                url={url}
                showModal={toggle}
                deleteable={false}
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
