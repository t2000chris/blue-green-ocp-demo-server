pipeline {
    agent {
        node {
            label 'nodejs'
        }
    }
    options {
        timeout(time: 20, unit: 'MINUTES')
    }
    stages {
        stage('preamble') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject() {
                            echo "Using project: ${openshift.project()}"
                        }
                    }
                }
            }
        }

        stage('Build'){
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject() {
                            def builds = openshift.selector("bc", "templateName").related('builds')
                            timeout(5) { 
                                builds.untilEach(1) {
                                    return (it.object().status.phase == "Complete")
                                }
                            }
                        }
                    }
                }
            }
        }

        stage('Approval'){
            steps {
                echo('Approve deployment to dev?')
            }
        }

        stage('Dev') {
            steps {
                echo 'Deploy to dev enviornment'
            }
        }
    }
}