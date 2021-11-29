package com.mauriciobttcastro.todoapp.service;

import com.mauriciobttcastro.todoapp.domain.Project;
import com.mauriciobttcastro.todoapp.domain.Task;
import com.mauriciobttcastro.todoapp.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

	private final ProjectRepository projectRepository;

	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	public List<Project> findAll() {
		return projectRepository.findAll();
	}

	public Project findByID(Long id) {
		return Optional.of(projectRepository.findById(id).get()).orElseThrow(() -> new EntityNotFoundException("Objeto não encontrado! Id" + id + " , Tipo :" + Task.class.getName()));
	}

	public Project save(Project project){
		return projectRepository.save(project);
	}

	public void update(Project project){
		projectRepository.save(project);
	}

	public void delete(Long id){
		projectRepository.deleteById(id);
	}


}
