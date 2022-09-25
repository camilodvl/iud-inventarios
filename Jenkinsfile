pipeline {
    agent any
    stages {
        stage('Build'){
            steps {
                echo 'build'
            }
        }
        stage('Test'){
            steps {
                echo 'test'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker-compose down -v'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }
    }
}