package com.projeto.estagios.controller;

import com.projeto.estagios.dao.EmpresaDAO;
import com.projeto.estagios.dao.EstudanteDAO;
import com.projeto.estagios.dao.VagaEstagioDAO;
import com.projeto.estagios.model.VagaEstagio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/admin")
public class AdminEstatisticasController {
    @Autowired private EmpresaDAO empresaDAO;
    @Autowired private EstudanteDAO estudanteDAO;
    @Autowired private VagaEstagioDAO vagaDAO;

    @GetMapping("/estatisticas")
    public Map<String, Long> getEstatisticas() {
        long empresas = empresaDAO.count();
        long estudantes = estudanteDAO.count();
        long vagasAbertas = vagaDAO.findAll().stream().filter(v -> !v.isEncerrada()).count();
        long vagasEncerradas = vagaDAO.findAll().stream().filter(VagaEstagio::isEncerrada).count();
        Map<String, Long> m = new HashMap<>();
        m.put("empresas", empresas);
        m.put("estudantes", estudantes);
        m.put("vagasAbertas", vagasAbertas);
        m.put("vagasEncerradas", vagasEncerradas);
        return m;
    }
}