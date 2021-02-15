import React from 'react';
import IconButton from "../layout/iconButton";
import If from "../layout/If";

const TodoLista = (props) => {

    const carregarLinhas = () => {
        const lista = props.tarefas || [];
        return lista.map(tarefa => (
            <tr key={tarefa._id} className={tarefa.isFinalizada ? "success" : ""}>
                <td className={tarefa.isFinalizada ? "tarefa-concluida" : ""}>{tarefa.descricao}</td>
                <td className="text-right">
                    <If test={!tarefa.isFinalizada}>
                        <button className="btn btn-success"
                                title="Marcar tarefa como concluída."
                                onClick={() => props.handleConcluido(tarefa)}>
                            <i className="fa fa-check"> Pronta!</i>
                        </button>
                    </If>
                    <If test={tarefa.isFinalizada}>
                        <button className="btn btn-warning"
                                title="Voltar a tarefa não realizada (aberta)."
                                onClick={() => props.handleVoltarParaAberta(tarefa)}>
                            <i className="fa fa-check"> Voltar</i>
                        </button>
                    </If>
                    <If test={tarefa.isFinalizada}>
                        <button className="btn btn-danger"
                                title="Remover tarefa da lista."
                                onClick={() => props.handleRemover(tarefa)}>
                            <i className="fa fa-trash-o"> Remover</i>
                        </button>
                    </If>
                </td>
            </tr>
        ));
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="col-sm-9">Tarefa</th>
                    <th className="col-sm-3 text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {carregarLinhas()}
            </tbody>
        </table>
    )
}
export default TodoLista;