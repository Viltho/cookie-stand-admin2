"use client";

import Footer from "@/components/Footer";
import Form from "@/components/CreateForm";
import Header from "@/components/Header";
import Json from "@/components/Json";
import ReportTable from "@/components/ReportTable";
import { useState } from "react";
import Login from "@/components/Login";

export default function Home() {
  const [object, setObject] = useState({});
  const [flag, setFlag] = useState(false);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Login />
      <Header />
      <div className="formcontainer mt-2">
        <Form setObject={setObject} setFlag={setFlag} />
      </div>
      <Json object={object} />
      {flag ? (
        <ReportTable object={object} />
      ) : (
        <p className="text-center">
          No Cookie Stands Available ... fill data to show table
        </p>
      )}
      <Footer />
    </main>
  );
}
