package com.mauriciobttcastro.todoapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mauriciobttcastro.todoapp.domain.TodoItem;
import com.mauriciobttcastro.todoapp.service.TodoService;

//http://localhost:8080

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	//fetch all todo items 
	@GetMapping("/api/todoItems")
	public ResponseEntity<?> fetchAllTodoItems () {
		List<TodoItem> todoItems = todoService.fetchAllTodoItems();
		
		return ResponseEntity.ok(todoItems);
	}
	
	@PostMapping("/api/todoItems")
	public ResponseEntity<?> createNewTodoItem() {
		TodoItem todoItem = todoService.createTodoItem();
		
		return ResponseEntity.ok(todoItem);
	}
	
	
	@PutMapping("/api/todoItems/{id}")
	public ResponseEntity<?> updateTodoItem(@PathVariable Integer id, @RequestBody TodoItem todoItem) {
		TodoItem updatedTodoItem = todoService.updateTodoItem(id, todoItem);
		
		return ResponseEntity.ok(updatedTodoItem);
	}
	
	
	@DeleteMapping("/api/todoItems/{id}")
	public ResponseEntity<?> deleteTodoItem(@PathVariable Integer id) {
		todoService.deleteTodoItem(id);
		
		
		return ResponseEntity.ok(null);
	}
}
