import { Button } from "ui";
import { MainLayout } from "@/components/Layout";
import { Header } from "@/container/home/header";
import { Body } from "@/container/home/body";

export default function Web() {
  return (
    <MainLayout>
      <Header />
      <Body />
    </MainLayout>
  );
}
