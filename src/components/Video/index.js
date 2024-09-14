//Aqui vão estar os videos das aulas do curso e mostrar de acordo com o modulo que ele está, qual o video que ele está assistindo  
import React, {Component} from 'react';
import { connect } from 'react-redux';

const Video = () => (
    <div>
    <strong>Módulo X</strong>
    <span>Video X</span>
</div>
)

export default connect(state => ({ 
    activeLesson: state.course.activeModule, 
    activeModule: state.course.activeLesson 
}))(Video);