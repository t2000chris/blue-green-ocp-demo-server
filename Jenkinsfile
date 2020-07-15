pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
        stages {
            stage('Build'){
            steps {
                echo 'This is build stage'
                sh 'npm install'
            }
            }

            stage('Approval'){
            steps {
                input('Approve deployment to dev?')
            }
            }

            stage('Dev') {
            steps {
                echo 'Deploy to dev enviornment'
            }
            }
        }
}