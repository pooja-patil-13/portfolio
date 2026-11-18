# Portfolio

A responsive personal portfolio website built with plain HTML, CSS, and JavaScript.

## Local preview

```bash
npm start
```

Open `http://localhost:4173`.

## Build

```bash
npm run build
```

The production-ready site is written to `dist/`.

## Jenkins

The `Jenkinsfile` builds the site, validates required files, packages `dist/`, and archives the
build artifact. Create a pipeline job in Jenkins, choose **Pipeline script from SCM**, select
this repository and branch `main`, and set the script path to `Jenkinsfile`.

To run Jenkins from Docker:

```bash
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts
```
