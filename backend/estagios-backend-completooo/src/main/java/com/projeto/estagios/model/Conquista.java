package com.projeto.estagios.model;

import jakarta.persistence.*;

@Entity
public class Conquista {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "estudante_id")
    private Estudante estudante;
    // getters e setters
}