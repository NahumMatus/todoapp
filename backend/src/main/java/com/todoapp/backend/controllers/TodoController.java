package com.todoapp.backend.controllers;
import com.todoapp.backend.models.Todo;
import com.todoapp.backend.repositories.TodoRepository;
import com.todoapp.backend.services.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;
    @Autowired
    private TodoRepository todoRepository;
    @CrossOrigin(origins = "http://localhost:5173")
    @Operation(summary = "Get All Todos")
    @GetMapping("/")
    public ResponseEntity<List<Todo>> getAllTodos() {
        return ResponseEntity.ok(todoService.getAllTodos());
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @Operation(summary = "Create a new todo")
    @PostMapping("/")
    public ResponseEntity<Object> createNewTodo( @RequestBody  @Valid Todo todo) {
        return ResponseEntity.ok(todoService.createNewTodo(todo));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @Operation(summary = "Update a todo")
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody @Valid Todo todo) {
        todo.setId(id);
        return ResponseEntity.ok(todoService.updateTodo(todo));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @Operation(summary = "Delete a todo")
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteTodo(@PathVariable int id) {
        todoService.deleteTodo(id);
        return ResponseEntity.ok(true);
    }

}
