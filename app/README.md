# Personal Site App

## Scripts

```bash 
$ npm start
$ npm test
$ npm run build
```

## Docker Commands

```bash
$ docker build . -t alajfit/site:personal-site
$ docker run -p 8080:80 alajfit/site:personal-site
```


## Resources

- [CRA Docs](https://create-react-app.dev/docs/documentation-intro)
- [React Markdown](https://github.com/rexxars/react-markdown)
- [React Markdown Usage](https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849)
- [Highlight JS](https://github.com/highlightjs/highlight.js)
- [Highlight JS Styles](https://highlightjs.org/static/demo/)
- [Lets Encrypt Docker File](https://github.com/linuxserver/docker-letsencrypt)

## Useful Info

> Kill Apps Running on Port in windows (replace port and pid)
```sh
$ netstat -ano | findstr :<PORT>
$ taskkill /PID <PID> /F
```

> Stop and remove all containers and images
```sh
docker container stop $(docker container list -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```