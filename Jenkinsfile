pipeline {
    agent any
    environment{
        baseUrl = credentials('BASE_URL')
    }
    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        sh 'echo BASE URL'
                        sh 'echo ${baseUrl} '
                        sh 'npm install'
                        sh 'npm update'                       
                        sh 'npx cypress run --config baseUrl=https://jpcorp-dev-ed.my.salesforce.com --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9 --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        sh 'npm install'
                        sh 'npm update'                       
                        sh 'npx cypress run --config baseUrl=https://jpcorp-dev-ed.my.salesforce.com --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9 --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        sh 'npm install'
                        sh 'npm update'                       
                        sh 'npx cypress run --config baseUrl=https://jpcorp-dev-ed.my.salesforce.com --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9 --parallel'
                    
                    }
                }
                  
            }

             
        }

    }
            
}