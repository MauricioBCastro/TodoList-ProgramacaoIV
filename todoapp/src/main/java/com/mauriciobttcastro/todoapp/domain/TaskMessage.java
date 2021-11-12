package com.mauriciobttcastro.todoapp.domain;

import lombok.Data;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class TaskMessage {

    @Id
    @Column(name = "id_task_message")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Setter
    private String message;

    @Setter
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name="id_task")
    private Task task;


}
