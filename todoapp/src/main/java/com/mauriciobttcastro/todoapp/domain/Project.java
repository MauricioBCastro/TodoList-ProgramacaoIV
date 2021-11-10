package com.mauriciobttcastro.todoapp.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Setter
    private String name;

    @OneToMany(
            mappedBy = "project", targetEntity = Task.class,
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<Task> taskList;
}
