'use client'
import styles from "./student-style.css";
import Link from "next/link";

export default function Student() {
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
				<p id="fraseInicial">Sou Estudante</p>
				<input type="text" name="name" placeholder="Nome completo" required/>
				<input type="text" name="cpf" placeholder="CPF"/>
				<input type="text" name="curso" placeholder="Curso"/>
				<input type="text" name="email" placeholder="Email"/>
				<input type="text" name="tel" placeholder="Telefone"/>
				<input type="text" name="areaInt" placeholder="Área de Interesse"/>
				<button id="salvar">Enviar</button>
			</form>
			<br/>
			<br/>
			<br/>
			<button><Link href="/enterpriseSignUp">Sou Empresa</Link></button>
			<button><Link href="/admSignUp">Sou Administrador</Link></button>
		</div>
    </section>
  );
}
