package com.projeto.estagios.model;

import jakarta.persistence.*;

@Entity
public class Empresa {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cnpj;
    private String email;
    private String telefone;
    private String endereco;
    private String areaAtuacao;
    // getters e setters
}