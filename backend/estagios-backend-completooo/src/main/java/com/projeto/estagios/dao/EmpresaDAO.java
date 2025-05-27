package com.projeto.estagios.dao;

import com.projeto.estagios.model.Empresa;
import org.springframework.data.repository.CrudRepository;

public interface EmpresaDAO extends CrudRepository<Empresa, Long> { }