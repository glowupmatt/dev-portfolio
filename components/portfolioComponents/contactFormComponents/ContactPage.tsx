"use client";
import React from "react";
import ContactInfo from "./contactInfo/ContactInfo";
import Contact from "./Contact";
import { motion } from "framer-motion";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center lg:flex-row"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <ContactInfo />
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
