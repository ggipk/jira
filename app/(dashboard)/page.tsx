"use client";

import React, { useEffect } from "react";
import { get } from "@/api/client";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SignInPage from "@/app/(auth)/sign-in/page";
import { SignInCard } from "@/features/auth/componets/sign-in-card";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.userState);
  if (!user.access_token && user.access_token === "") {
    return <SignInPage />;
  }
  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm />
    </div>
  );
}
