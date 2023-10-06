pipeline {
    agent any 

    environment {
        DIRECTORY_PATH = '/Users/allen/Desktop/myDirectory'
        TESTING_ENVIRONMENT = 'staging'
        PRODUCTION_ENVIRONMENT = 'XiangGao'
    }
    
    stages {
       stage('Build') {
            steps {
                echo "fetch the source code from the directory path specified by the environment variable: ${DIRECTORY_PATH}"
                echo "compile the code and generate any necessary artifacts"
            }
        }

        stage('Test') {
            steps {
                echo "unit tests"
                echo "integration tests"
            }
        }

       stage('Code Analysis') {
            steps {
                // Use Eslint for code analysis
                sh 'npx eslint ./index.js'
            }
        }
        
        stage('Security Scan') {
            steps {
                // Use npm audit for security scanning
                sh 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo "deploy the application to a testing environment specified by the environment variable: ${TESTING_ENVIRONMENT}"
            }
        }

        stage('Approval') {
            steps {
                echo "Awaiting manual approval"
                echo "Approval granted"
            }
        }

        stage('Deploy to Production') {
            steps {
                echo "deploy the code to the production environment: ${PRODUCTION_ENVIRONMENT}"
            }
        }
    }
    post {
        success{
            mail to: 'allengao1215@gmail.com',
                 subject: "Build Status Email",
                 body: "Build was successful."
        }
    }
}
