import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | Give&Take - Next.js Dashboard Template",
  description: "This is Next.js Home for Give&Take Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
