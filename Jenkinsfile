pipeline {
    agent any

    environment {
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                powershell 'cd frontend; docker build -t react-app:latest .'
            }
        }

        stage('Build Backend Image') {
            steps {
                powershell 'cd backend; docker build -t node-api:latest .'
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