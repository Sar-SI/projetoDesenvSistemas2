'use client'
import styles from "./dashboard-style.css";
import Link from "next/link";

export default function Dashboard(){
    return(
        <section className="homeBody">
      <nav>
        <button id="signup"><Link href="/studentSignUp">Sign Up</Link></button>
        <button><Link href="/dashboard">Dashboard</Link></button>
        <button><Link href="/vagas">Vagas</Link></button>
        <button><Link href="/home">Home</Link></button>
      </nav>
      <div id="painel">
			<p id="fraseInicial">Estátisticas Administrativas</p>
			<p id="objetivo">Empresas cadastradas: </p>
			<p id="objetivo">Estudantes cadastrados: </p>
			<p id="objetivo">Vagas abertas: </p>
			<p id="objetivo">Vagas encerradas: </p>
		</div>
    </section>
    );
}