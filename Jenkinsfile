pipeline {
    agent any 

    environment {
        TESTING_ENVIRONMENT = 'Heroku'
        PRODUCTION_ENVIRONMENT = 'Heroku'
    }
    
    stages {
       stage('Build') {
            steps {
                 echo "Use Maven as a build tool"
                // sh 'mvn clean install'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                // Use JUnit or TestNG for running tests
                // sh 'mvn test'
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

        stage('Integration Tests on Staging') {
            steps {
                sh 'bash integration-tests.sh'
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
