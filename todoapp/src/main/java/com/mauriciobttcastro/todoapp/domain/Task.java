package com.mauriciobttcastro.todoapp.domain;

import com.mauriciobttcastro.todoapp.domain.enuns.Situation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Task implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Setter
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	@Setter
	private String assunto;

	@Setter
	private Situation situation;

	@ManyToOne
	@JoinColumn(name="id_task")
	private Project project;

}
