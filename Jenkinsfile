pipeline {
    agent any
    
    environment {
        DOCKER_COMPOSE = 'docker-compose'
    }

    stages {
        stage('Environment Setup') {
            steps {
                echo "Initializing Docker environment"
            }
        }

        stage('Build & Test') {
            steps {
                echo "Building Docker containers"
                powershell "${DOCKER_COMPOSE} build"
                
                echo "Starting containers"
                powershell "${DOCKER_COMPOSE} up -d"
                
                echo "Running tests (add your test commands here)"
                // Add test commands for frontend/backend
            }
        }

        stage('Deploy') {
            steps {
                echo "Redeploying application"
                powershell "${DOCKER_COMPOSE} down"
                powershell "${DOCKER_COMPOSE} up -d"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
    }
}