package com.mauriciobttcastro.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mauriciobttcastro.todoapp.domain.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task , Long> {

}
