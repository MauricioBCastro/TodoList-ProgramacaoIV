package com.mauriciobttcastro.todoapp.domain;

import com.mauriciobttcastro.todoapp.domain.enuns.Situation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Task implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Setter
	@Column(name = "id_task")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	@Setter
	@NotNull
	private String assunto;

	@Setter
	private Situation situation = Situation.NAO_INICIADA;

	@Setter
	@NotNull
	private LocalDate date ;

	@OneToMany(
			mappedBy = "task",
			fetch = FetchType.LAZY,
			cascade = CascadeType.ALL
	)
	private List<TaskMessage> taskMessages;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="id_project")
	private Project project;


}
