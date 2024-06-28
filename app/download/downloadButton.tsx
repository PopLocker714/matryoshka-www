"use client";
import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

export const DownloadButton = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // const par/*  */ser = new UAParser();
    setValue(navigator.userAgent)

    // setValue(JSON.stringify(parser.getResult().cpu.architecture));
  }, []);
  return <div>{value}</div>;
};
