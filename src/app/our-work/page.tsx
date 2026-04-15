import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work — Pro Trend",
  description: "See how Pro Trend has helped brands grow through strategic digital marketing. Client showcase with real results.",
};

export default function OurWork() {
  return <OurWorkClient />;
}
