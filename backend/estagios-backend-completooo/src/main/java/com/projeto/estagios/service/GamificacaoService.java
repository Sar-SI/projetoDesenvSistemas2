package com.projeto.estagios.service;

import com.projeto.estagios.dao.ConquistaDAO;
import com.projeto.estagios.dao.EstudanteDAO;
import com.projeto.estagios.model.Conquista;
import com.projeto.estagios.model.Estudante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GamificacaoService {
    @Autowired private EstudanteDAO estudanteDAO;
    @Autowired private ConquistaDAO conquistaDAO;

    public void adicionarPontos(Long estudanteId, int pontos) {
        Optional<Estudante> op = estudanteDAO.findById(estudanteId);
        op.ifPresent(e -> {
            e.setPontos(e.getPontos() + pontos);
            estudanteDAO.save(e);
        });
    }

    public void adicionarConquista(Long estudanteId, String titulo, String descricao) {
        Optional<Estudante> op = estudanteDAO.findById(estudanteId);
        op.ifPresent(e -> {
            Conquista c = new Conquista();
            c.setTitulo(titulo);
            c.setDescricao(descricao);
            c.setEstudante(e);
            conquistaDAO.save(c);
        });
    }
}