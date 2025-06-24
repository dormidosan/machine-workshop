"use client";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function GAInit() {
  useEffect(() => {
    ReactGA.initialize("G-XMNYFKZ942");
  }, []);
  return null;
}
