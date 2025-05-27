'use client'
import styles from "./enterprise-style.css";
import Link from "next/link";

export default function Enterprise() {
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
				<p id="fraseInicial">Sou Empresa</p>
				<input type="text" name="name" placeholder="Nome" required/>
				<input type="text" name="cnpj" placeholder="CNPJ"/>
				<input type="text" name="tel" placeholder="Telefone"/>
				<input type="text" name="email" placeholder="Email"/>
				<input type="text" name="end" placeholder="Endereço"/>
				<input type="text" name="areaAtu" placeholder="Área de Atuação"/>
				<button id="salvar">Enviar</button>
			</form>
			<br/>
			<br/>
			<br/>
			<button><Link href="/studentSignUp">Sou Estudante</Link></button>
			<button><Link href="/admSignUp">Sou Administrador</Link></button>
		</div>
    </section>
  );
}
