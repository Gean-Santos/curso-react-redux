import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';

export default class extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
      </div>
    );
  }
}