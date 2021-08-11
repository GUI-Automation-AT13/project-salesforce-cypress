pipeline {
    agent any
    environment{
        BASE_URL = credentials('BASE_URL')
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
                        sh 'echo JOEL A MANO CAMBIADA'
                        sh 'echo ${BASE_URL} '
                        sh 'npm install'
                        sh 'npm update'                       
                        sh '${BASE_URL} npx cypress run --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
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
                        sh '${BASE_URL} npx cypress run --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
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
                        sh '${BASE_URL} npx cypress run --headless --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
                    }
                }
                  
            }

             
        }

    }
            
}