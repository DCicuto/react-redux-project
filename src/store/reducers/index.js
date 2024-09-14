import { combineReducers } from "redux";

import course from "./course";

export default combineReducers({
    course,
    });

/* isso serve para quando temos varios reducers e queremos combinar todos eles em um unico reducer. 
O combineReducers: Função q recebe um objeto c/ todos os reducers e retorna um unico reducer q é passado p/ o createStore.

Nesse ponto o que vai mudar na aplicaçao, é que hj temos um objeto, que já tem : {modules:[], activeLesson:{}, activeModule:{}}
 E agora vamos colocar esse objeto dentro de um objeto com o nome do reducer, que no caso é o course.

        course: {modules:[], activeLesson:{}, activeModule:{}}

    e se tivessemos um reducer de usuario por exemplo, teriamos um segundo objeto dentro do combineReducers. 
        user: {name: '', avatar: '', email: ''} 


então quando a gente ultiliza o combine reducer o combineReducers ele transforma o estado da aplicação em um objeto que é subdivido em categorias, baseadas em cada funcionalidade da aplicacao.


*/