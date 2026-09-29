pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Student Task Manager'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests'
                sh 'npm test'
            }
        }
    }

    post {

        success {
            echo 'SUCCESS: Build and all tests passed!'
        }

        failure {
            echo 'FAILURE: Build or tests failed!'
        }

        always {
            echo 'Jenkins Pipeline execution completed.'
        }
    }
}
