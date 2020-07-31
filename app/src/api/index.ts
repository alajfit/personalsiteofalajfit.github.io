import { GithubTree } from '../types';

export const getBlogs = () =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('blogs/')))

export const getProjects = () =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('projects/')))
