pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "react-app:latest"
        BACKEND_IMAGE = "node-api:latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'cd frontend && docker build -t $FRONTEND_IMAGE .'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'cd backend && docker build -t $BACKEND_IMAGE .'
            }
        }

        stage('Start Services with Docker Compose') {
            steps {
                // Stop and remove existing containers
                sh 'docker-compose down'

                // Start new containers
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo "✅ Application is now running!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}