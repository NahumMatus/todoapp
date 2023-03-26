package com.todoapp.backend.repositories;

import com.todoapp.backend.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
    public List<Todo> findByActiveTrue();
    public List<Todo> findByActiveFalse();
    public List<Todo> findAll();

    Optional<Todo> findById(Long id);

}
