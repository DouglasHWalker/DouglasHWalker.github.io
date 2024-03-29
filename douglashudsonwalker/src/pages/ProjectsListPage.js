import React from 'react';
import projectContent from '../data/project-content'
import ProjectList from '../components/ProjectList'

const ProjectsListPage = () => (
    <>
        <h1>Articles</h1>
        <ProjectList projects={projectContent} />
    </>
);

export default ProjectsListPage;