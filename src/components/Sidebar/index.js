import React from 'react';
import { connect } from 'react-redux';

//aqui ele vai pegar todos os exports da pasta actions e colocar dentro do objeto CourseActions
import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson((module, lesson))}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

// connect é uma função que retorna outra função. Aqui ela vai receber como parâmetro o estado e deve retornar dessa função quais propriedades eu quero dessa função.


//bla bla função que recebe o estado e retorna um objeto com as propriedades que eu quero
const mapStateToProps = state => ({
  modules: state.course.modules,
});

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);