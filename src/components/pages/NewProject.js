import React from 'react'
import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

  const histoy = useHistory()

  function createPost(project) {
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers:
      {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        histoy.push('/projects', {message: 'Projeto criado com sucesso!'})
      })
      .catch(error => console.log('Falha na posagem no banco', error))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btntext='Criar projeto' />
    </div>
  )
}

export default NewProject