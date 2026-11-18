pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  stages {
    stage("Validate") {
      steps {
        sh "node --version"
        sh "npm test"
      }
    }

    stage("Build") {
      steps {
        sh "npm run build"
      }
    }

    stage("Package") {
      steps {
        sh "tar -czf portfolio-build-${BUILD_NUMBER}.tar.gz -C dist ."
      }
    }
  }

  post {
    success {
      archiveArtifacts artifacts: "portfolio-build-${BUILD_NUMBER}.tar.gz", fingerprint: true
    }
    always {
      cleanWs()
    }
  }
}
