pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "agent1"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run run-dashboard-parallel'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "agent2"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run run-dashboard-parallel'
                    }
                }
            }        
        }
    }
}