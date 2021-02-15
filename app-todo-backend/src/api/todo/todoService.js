const Todo = require('./todoModel');

//Expor os métodos RestFULL
Todo.methods(["get", "post", "put", "delete"]);

// Ajuste no update
// new:true = quando atualizar um registro, retornar o registro atualizado não o anterior.
// runValidators:true = ativar as validações definidas no Model.
Todo.updateOptions({new:true, runValidators:true});

module.exports = Todo;