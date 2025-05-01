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
                bat 'cd frontend && docker build -t $FRONTEND_IMAGE .'
            }
        }

        stage('Build Backend Image') {
            steps {
                bat 'cd backend && docker build -t $BACKEND_IMAGE .'
            }
        }

        stage('Start Services with Docker Compose') {
            steps {
                // Stop and remove existing containers
                bat 'docker-compose down'

                // Start new containers
                bat 'docker-compose up -d'
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