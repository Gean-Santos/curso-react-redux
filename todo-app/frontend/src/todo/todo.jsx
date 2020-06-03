import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';

export default class extends Component {
  render() {
    return (
      <div>
        <PageHeader nome='Tarefas' small='Cadastro' />
      </div>
    );
  }
}