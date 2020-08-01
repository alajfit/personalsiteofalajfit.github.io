import { GithubTreeInfo, IBlogListing } from '../types';

export const cleanBlogDataFromUrl = (blog: GithubTreeInfo): IBlogListing => {
    const blogSubString = blog.path.substring(
        blog.path.lastIndexOf('/') + 1, 
        blog.path.lastIndexOf('.')
    ).split('_')
    
    return {
        name: blogSubString[3],
        href: `/blogs/${blog.sha}`,
        date: blogSubString[0],
        type: blogSubString[1],
        time: blogSubString[2],
        desc: blogSubString[4],
    }
}
