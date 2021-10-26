package com.mauriciobttcastro.todoapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mauriciobttcastro.todoapp.domain.TodoItem;
import com.mauriciobttcastro.todoapp.repository.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepo;
	
	public List<TodoItem> fetchAllTodoItems () {
		return todoRepo.fetchAllTodoItems();
	}

	public TodoItem updateTodoItem(Integer id, TodoItem todoItem) {
		Optional<TodoItem> todoOpt = todoRepo.fetchAllTodoItems()
			.stream()
			.filter(item -> item.getId().equals(id))
			.findAny();
		System.out.println(todoOpt);
		if (todoOpt.isPresent()) {
			TodoItem item = todoOpt.get();
			item.setIsDone(todoItem.getIsDone());
			item.setTask(todoItem.getTask());
			System.out.println("taaqui");
			return item;
		}
		return null;
	}

	public TodoItem createTodoItem() {
		TodoItem todoItem = new TodoItem();
		
		todoItem.setIsDone(false);
		todoItem = todoRepo.save(todoItem);
		todoItem.setTask("Task #" + todoItem.getId());
		
		return todoItem;
	}

	public void deleteTodoItem(Integer id) {
		todoRepo.delete(id);
		
	}
}
