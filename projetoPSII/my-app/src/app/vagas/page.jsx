'use client'
import styles from "./vagas-style.css";
import Link from "next/link";

export default function Vagas(){
    return(
        <section className="homeBody">
      <nav>
        <button id="signup"><Link href="/studentSignUp">Sign Up</Link></button>
        <button><Link href="/dashboard">Dashboard</Link></button>
        <button><Link href="/vagas">Vagas</Link></button>
        <button><Link href="/home">Home</Link></button>
      </nav>
      <p id="title">Vagas</p>
      <div id="card">
			<p><b>Estágio 1</b></p>
    		<p>Uma atividade muito legal</p>
    		<p>Dev Front-end</p>
    		<p>São Paulo - SP</p>
    		<p>Híbrido</p>
    		<p>6 horas semanais</p>
    		<p>Graduação em SI</p>
    		<a href="">ESTOU INTERESSADO</a>
		</div>
    </section>
    );
}