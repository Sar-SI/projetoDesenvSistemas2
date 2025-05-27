'use client'
import styles from "./adm-style.css";
import Link from "next/link";

export default function Adm() {
  return (
    <section className="homeBody">
      <nav>
        <button id="signup"><Link href="/studentSignUp">Sign Up</Link></button>
        <button><Link href="/dashboard">Dashboard</Link></button>
        <button><Link href="/vagas">Vagas</Link></button>
        <button><Link href="/home">Home</Link></button>
      </nav>
      <div id="painel">
			<form>
				<p id="fraseInicial">Sou Administrador</p>
				<input type="text" name="name" placeholder="Nome" required/>
				<input type="password" name="password" placeholder="Senha"/>
				<input type="password" name="password" placeholder="Confirmar Senha"/>
				<button id="salvar">Enviar</button>
			</form>
			<br/>
			<br/>
			<br/>
			<button><Link href="/studentSignUp">Sou Estudante</Link></button>
			<button><Link href="/enterpriseSignUp">Sou Empresa</Link></button>
		</div>
    </section>
  );
}
