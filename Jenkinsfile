pipeline {
    agent any

    tools {nodejs "nodejs"}
    
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