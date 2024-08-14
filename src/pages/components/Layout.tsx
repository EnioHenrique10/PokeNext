// src/pages/components/Layout.tsx
import { ReactNode } from 'react'; // Importe o tipo ReactNode
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

// Define o tipo para as props do componente Layout
interface LayoutProps {
  children: ReactNode; // Define o tipo para children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
