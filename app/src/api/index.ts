import { GithubTree, GithubBlogInfo } from '../types';

export const getBlogs = () =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('blogs/')))

export const getBlog = (blogSha: String) =>
    fetch(`https://api.github.com/repos/alajfit/site.personal/git/blobs/${blogSha}`)
        .then(res => res.json())
        .then((data: GithubBlogInfo) => data)

export const getProjects = () =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('projects/')))
