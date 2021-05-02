export interface GithubTree {
    sha: String;
    url: String;
    tree: GithubTreeInfo[];
    truncated: Boolean;
}

export interface GithubTreeInfo {
    path: String;
    mode: String;
    type: String;
    sha: String;
    size: Number;
    url: String;
}

export enum EncodingType {
    BASE64 = 'base64',
}

export interface GithubBlogInfo {
    sha: String;
    node_id: String;
    size: Number;
    url: String;
    content: String;
    encoding: EncodingType.BASE64;
}

export interface IBlogListing {
    name: string;
    href: string;
    date: string;
    type: string;
    time: string;
    desc: string;
}

export interface ICodeListing {
    name: string;
    href: string;
    date: string;
    type: string;
    time: string;
    desc: string;
}

