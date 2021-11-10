package com.mauriciobttcastro.todoapp.web;

import java.net.URI;
import java.util.List;

import com.sun.source.util.TaskListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mauriciobttcastro.todoapp.domain.Task;
import com.mauriciobttcastro.todoapp.service.TaskService;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "task")
public class TaskController {

	private final TaskService service;

	public TaskController(TaskService service) {
		this.service = service;
	}

	@GetMapping
	public ResponseEntity<List<Task>> findAll(){
		return ResponseEntity.ok().body(service.findAll());
	}

	@GetMapping( value = "/{id}")
	public ResponseEntity<Task> findByID(@PathVariable Long id){
		final var task = service.findByID(id);
		return ResponseEntity.ok().body(task);
	}

	@PostMapping
	@CrossOrigin
	public ResponseEntity<Void> save(@RequestBody @Valid Task task){
		final var taskReturn = service.save(task);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(taskReturn.getId()).toUri();
		return  ResponseEntity.created(uri).build();
	}

	@PutMapping(value="/{id}" )
	public ResponseEntity<Void> update(@RequestBody Task obj , @PathVariable Long id){
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();

	}

	@DeleteMapping(value="/{id}" )
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
