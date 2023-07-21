"use client";
import FeaturedGame from "@/components/organisms/FeaturedGame";
import Footer from "@/components/organisms/Footer";
import MainBanner from "@/components/organisms/MainBanner";
import Navbar from "@/components/organisms/Navbar";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import TransactionStep from "@/components/organisms/TransactionStep";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
