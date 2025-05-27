package com.projeto.estagios.model;

import jakarta.persistence.*;

@Entity
public class VagaEstagio {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;
    private String area;
    private String localizacao;
    private String modalidade;
    private String cargaHoraria;
    private String requisitos;
    private boolean encerrada = false;

    public boolean isEncerrada() { return encerrada; }
    public void setEncerrada(boolean encerrada) { this.encerrada = encerrada; }
    // getters e setters
}