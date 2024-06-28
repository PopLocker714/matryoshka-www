"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Button } from "./ui/button";
import cfg from "@/config.json";
import { DownloadIcon } from "lucide-react";

export const DownloadDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mb-6">
        <Button variant="outline">Скачать APK {cfg.APP_VERSION}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className={"bg-primary-500 text-white"}
          onClick={() => {
            window.open(`/apks/${cfg.APP_VERSION}/app-universal-release.apk`);
          }}
        >
          Матрешка universal.apk
          <DownloadIcon size={18} className="ml-2" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {window.open(`/apks/${cfg.APP_VERSION}/app-arm64-v8a-release.apk`);}}>
          Матрешка arm64-v8a.apk
          <DownloadIcon size={18} className="ml-2" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {window.open(`/apks/${cfg.APP_VERSION}/app-armeabi-v7a-release.apk`);}}>
          Матрешка armeabi-v7a.apk
          <DownloadIcon size={18} className="ml-2" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {window.open(`/apks/${cfg.APP_VERSION}/app-x86_64-release.apk`);}}>
          Матрешка x86_64.apk
          <DownloadIcon size={18} className="ml-2" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {window.open(`/apks/${cfg.APP_VERSION}/app-x86-release.apk`);}}>
          Матрешка x86.apk
          <DownloadIcon size={18} className="ml-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
