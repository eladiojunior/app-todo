import React from 'react';
import axios from "axios";

import PageHeader from "../layout/pageHeader";
import TodoForm from "./todoForm";
import TodoLista from "./todoLista";

const URL_API = "http://localhost:3003/api/todo";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {descricao: '', lista: []};
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.handleAdicionar = this.handleAdicionar.bind(this);
        this.handleFiltrarTarefas = this.handleFiltrarTarefas.bind(this);
        this.handleLimparFiltro = this.handleLimparFiltro.bind(this);

        this.handleRemover = this.handleRemover.bind(this);
        this.handleConcluido = this.handleConcluido.bind(this);
        this.handleVoltarParaAberta = this.handleVoltarParaAberta.bind(this);

        this.listarTarefas();

    }

    handleAdicionar() {
        const descricao = this.state.descricao;
        axios.post(URL_API, { descricao })
            .then(resposta => this.listarTarefas());
    }

    handleConcluido(tarefa) {
        axios.put(`${URL_API}/${tarefa._id}`, {...tarefa, isFinalizada: true})
            .then(resposta => this.listarTarefas(this.state.descricao));
    }

    handleVoltarParaAberta(tarefa) {
        axios.put(`${URL_API}/${tarefa._id}`, {...tarefa, isFinalizada: false})
            .then(resposta => this.listarTarefas(this.state.descricao));
    }

    handleRemover(tarefa) {
        axios.delete(`${URL_API}/${tarefa._id}`)
            .then(resposta => this.listarTarefas(this.state.descricao));
    }

    handleChangeDescricao(e) {
        this.setState({...this.state, descricao: e.target.value});
    }

    handleFiltrarTarefas() {
        this.listarTarefas(this.state.descricao);
    }

    handleLimparFiltro() {
        this.listarTarefas();
    }

    listarTarefas(descricao = "") {
        const query = descricao ? `&descricao__regex=/${descricao}/` : "";
        axios.get(`${URL_API}?sort=-dataCriacao${query}`)
            .then(resposta =>
                this.setState({...this.state, descricao, lista: resposta.data}));
    }

    render() {
        return (
            <div>
                <PageHeader titulo="Tarefas" subtitulo="Registrar"/>
                <TodoForm descricao={this.state.descricao}
                          handleAdicionar={this.handleAdicionar}
                          handleChangeDescricao={this.handleChangeDescricao}
                          handleFiltrarTarefas={this.handleFiltrarTarefas}
                          handleLimparFiltro={this.handleLimparFiltro}/>
                <br/>
                <TodoLista tarefas={this.state.lista}
                           handleConcluido={this.handleConcluido}
                           handleVoltarParaAberta={this.handleVoltarParaAberta}
                           handleRemover={this.handleRemover}/>
            </div>
        );
    }
}
export default Todo;