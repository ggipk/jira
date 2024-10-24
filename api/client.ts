"use client";
import axios from "axios";
import { router } from "next/client";

export const noAuthClient = axios.create({
  baseURL: "http://localhost:8000",
});

const client = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      typeof window !== "undefined"
        ? `Bearer ${sessionStorage.getItem("access_token")}`
        : undefined,
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
    }
  },
);

export const { get, post } = client;
