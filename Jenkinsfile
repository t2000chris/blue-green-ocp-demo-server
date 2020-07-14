pipeline {
    agent any
        stage{
            stage('Build'){
                steps {
                    echo 'This is build stage'
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