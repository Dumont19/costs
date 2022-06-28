import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {

  const [projects, setProjects] = useState([])

  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setProjects(data)
      console.log(data)
    })
    .catch(error => console.log('Erro na requisição', error))
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto'/>
      </div>
      {message && <Message type='sucess' msg={message}/>}
      <Container customClass='start'>
        {projects.length > 0 && 
          projects.map(project => <ProjectCard
              id={project.id} 
              name={project.name}
              budget={project.budget}
              category={project.category? project.category.name : project.category}
              key={project.id}
            /> )}
      </Container>
    </div>
  )
}

export default Projects