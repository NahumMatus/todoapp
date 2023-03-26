package com.todoapp.backend.services;

import com.todoapp.backend.models.Todo;
import com.todoapp.backend.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public Todo createNewTodo(Todo todo) {
        LocalDateTime dateNow = LocalDateTime.now();
        todo.setCreatedAt(dateNow);
        todo.setActive(true);
        return todoRepository.save(todo);
    }
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id){
        return todoRepository.findById(id);
    }
    public void deleteTodo(long id) {
        Optional < Todo > todo = getTodoById(id);
        System.out.println(todo);
        if (todo.isPresent()) {
            todoRepository.delete(todo.get());
        }
    }

    public Todo updateTodo(Todo todo) {
        return todoRepository.save(todo);
    }

}
