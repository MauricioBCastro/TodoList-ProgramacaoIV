package com.mauriciobttcastro.todoapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mauriciobttcastro.todoapp.domain.Task;
import com.mauriciobttcastro.todoapp.repository.TaskRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class TaskService {
	
	private final TaskRepository taskRepository;

	public TaskService(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	public List<Task> findAll() { return taskRepository.findAll(); }

	public Task findByID(Long id) {
		Optional<Task> categoriaOptional = taskRepository.findById(id);
		if (categoriaOptional.isPresent()){
			return categoriaOptional.get();
		}
		throw new EntityNotFoundException("Objeto não encontrado! Id" + id + " , Tipo :" + Task.class.getName());
	}

	public Task save(Task categoria){
		return taskRepository.save(categoria);
	}

	public Task update(Task obj){ return taskRepository.save(obj); }

	public void delete(Long id){ taskRepository.deleteById(id); }


}
