package com.projeto.estagios.dao;

import com.projeto.estagios.model.Estudante;
import org.springframework.data.repository.CrudRepository;

public interface EstudanteDAO extends CrudRepository<Estudante, Long> { }