pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/GUI-Automation-AT13/project-salesforce-cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 541783f3-7a1a-4851-965f-109d067874f9  --parallel'
                    
                    }
                }
                  
            }

             
        }

    }
            
}