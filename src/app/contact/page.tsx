import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monkey Monkey - Contact Us",
  // other metadata
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
