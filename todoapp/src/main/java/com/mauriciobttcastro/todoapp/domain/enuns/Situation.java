package com.mauriciobttcastro.todoapp.domain.enuns;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Situation {

    NAO_INICIADA(0 , "Não Iniciada"),
    INICIADA(1,"Iniciada"),
    CONCLUIDA(2,"Concluída");

    private final int value;
    private final String descricao;

}
