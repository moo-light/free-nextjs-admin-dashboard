import Calendar from "@/components/Calender";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Calender | Give&Take - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for Give&Take  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
