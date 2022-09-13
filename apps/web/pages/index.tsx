import { MainLayout } from "@/components/Layout";
import { Header } from "@/container/home/header";
import { Body } from "@/container/home/body";
import { SearchProvider } from "@/container/home/searchContext";

export default function Web() {
  return (
    <MainLayout>
      <SearchProvider>
        <Header />
        <Body />
      </SearchProvider>
    </MainLayout>
  );
}
