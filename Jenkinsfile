
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                bat 'node --version'
                bat 'npm --version'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Student Task Manager'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests'
                bat 'npm test'
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
            echo 'Pipeline execution completed.'
        }
    }
}
