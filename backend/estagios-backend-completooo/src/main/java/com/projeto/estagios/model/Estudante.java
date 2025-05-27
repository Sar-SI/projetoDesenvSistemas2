package com.projeto.estagios.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Estudante {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cpf;
    private String curso;
    private String email;
    private String telefone;
    private String senha;
    private int pontos = 0;

    @OneToMany(mappedBy = "estudante", cascade = CascadeType.ALL)
    private Set<Conquista> conquistas;
    // getters e setters
}