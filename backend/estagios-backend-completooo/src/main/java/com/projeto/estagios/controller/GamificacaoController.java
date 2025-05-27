package com.projeto.estagios.controller;

import com.projeto.estagios.service.GamificacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gamificacao")
public class GamificacaoController {
    @Autowired private GamificacaoService service;

    @PostMapping("/pontos")
    public void adicionarPontos(@RequestParam Long estudanteId,
                                @RequestParam int pontos) {
        service.adicionarPontos(estudanteId, pontos);
    }

    @PostMapping("/conquista")
    public void adicionarConquista(@RequestParam Long estudanteId,
                                   @RequestParam String titulo,
                                   @RequestParam String descricao) {
        service.adicionarConquista(estudanteId, titulo, descricao);
    }
}