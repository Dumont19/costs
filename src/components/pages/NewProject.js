import React from 'react'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar serviços</p>
      <ProjectForm btntext='Criar projeto'/>
    </div>
  )
}

export default NewProject