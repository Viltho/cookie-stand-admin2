"use client";

import Head from 'next/head';
import useResource from '../hooks/useResource';

import Footer from "@/components/Footer";
import Form from "@/components/CreateForm";
import Header from "@/components/Header";
import Json from "@/components/Json";
import ReportTable from "@/components/ReportTable";
import { useState } from "react";
import LoginForm from "@/components/Login";
import { useAuth } from "../contexts/Auth";

export default function Home() {
  const { user, login, logout } = useAuth();
  const [object, setObject] = useState({});
  const [flag, setFlag] = useState(false);
  // const {resource, loading, createResource, deleteResource} = useResource();

  return (
    <main className="flex min-h-screen flex-col justify-between">
      {user ? (
        <>
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
        </>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}


