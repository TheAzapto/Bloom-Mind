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
                powershell 'cd frontend; docker build -t ${env.FRONTEND_IMAGE} .'
            }
        }

        stage('Build Backend Image') {
            steps {
                powershell 'cd backend; docker build -t ${env.BACKEND_IMAGE} .'
            }
        }

        stage('Start Services with Docker Compose') {
            steps {
                // Stop existing containers
                powershell 'docker-compose down'

                // Start new containers
                powershell 'docker-compose up -d'
            }
        }

        stage('Verify Running Containers') {
            steps {
                powershell 'docker ps'
            }
        }
    }

    post {
        success {
            echo "✅ Application is now running!"
        }
        failure {
            echo "❌ Pipeline failed. Check logs above."
        }
    }
}