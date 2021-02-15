import React from 'react';
import Grid from "../layout/grid";
import IconButton from "../layout/iconButton";

export default (props) => {

    const keyHandle = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                props.handleFiltrarTarefas();
            } else {
                props.handleAdicionar();
            }
        } else if (e.key === 'Escape') {
            props.handleLimparFiltro();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 9 9">
                <input type="text" className="form-control" placeholder="Adicione uma tarefa"
                       title="Atalho: ENTER = Nova tarefa, SHIFT + ENTER = Filtra as tarefas e ESP = Limpa o campo."
                       value={props.descricao}
                       onChange={props.handleChangeDescricao}
                       onKeyUp={keyHandle}/>
            </Grid>
            <Grid cols="12 3 3 3">
                <button className="btn btn-primary" onClick={props.handleAdicionar}
                        title="Registrar uma nova tarefa.">
                    <i className="fa fa-plus"> Novo</i>
                </button>
                <button className="btn btn-info" onClick={props.handleFiltrarTarefas}
                        title="Filtrar a lista de tarefas conforme o filtro informado.">
                    <i className="fa fa-search"> Filtrar</i>
                </button>
                <button className="btn btn-default" onClick={props.handleLimparFiltro}
                        title="Limpar filtro de pesquisa das tarefas.">
                    <i className="fa fa-close"> Limpar</i>
                </button>
            </Grid>
        </div>
    )
}