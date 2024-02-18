import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/src/components/navbar/Navbar";
import { Calculator } from "@/src/calculator/Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet"></link>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar></Navbar>
     <Calculator/>
      </main>
    </>
  );
}
