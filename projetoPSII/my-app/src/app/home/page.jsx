'use client'
import styles from "./page-style.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className="homeBody">
      <nav>
        <button id="signup"><Link href="/studentSignUp">Sign Up</Link></button>
        <button><Link href="/dashboard">Dashboard</Link></button>
        <button><Link href="/vagas">Vagas</Link></button>
        <button><Link href="/home">Home</Link></button>
      </nav>
      <div>
        <p id="fraseInicial">Procurando estágio? Sua oportunidade se encontra aqui!</p>
        <p id="objetivo">Encontre vagas de forma fácil e efetiva, buscando por seu estágio dos sonhos. Confira algumas das empresas disponíveis neste site.</p>
        <input type="search" name="searchBar" id="searchBar"/>
        <button id="search">search</button>
		  </div>
    </section>
  );
}
