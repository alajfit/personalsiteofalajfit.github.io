import { GithubTree, GithubBlogInfo, IBlogListing } from '../types';
import { cleanBlogDataFromUrl } from './utils';

export const getBlogs = (): Promise<IBlogListing[]> =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('blogs/')))
        .then(blogs => blogs.map(blog => cleanBlogDataFromUrl(blog)))

export const getBlog = (blogSha: String) =>
    fetch(`https://api.github.com/repos/alajfit/site.personal/git/blobs/${blogSha}`)
        .then(res => res.json())
        .then((data: GithubBlogInfo) => data)

export const getProjects = () =>
    fetch('https://api.github.com/repos/alajfit/site.personal/git/trees/master?recursive=1')
        .then(res => res.json())
        .then((data: GithubTree)  => data.tree.filter(file => file.path.startsWith('projects/')))
