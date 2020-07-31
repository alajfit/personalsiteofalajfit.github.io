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