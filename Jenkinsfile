pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('playwright-report')) {
                    archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
                }
                if (fileExists('test-results')) {
                    archiveArtifacts artifacts: 'test-results/**', fingerprint: true, allowEmptyArchive: true
                }
            }
        }
        failure {
            echo 'Playwright tests failed. Build marked as failed.'
        }
        success {
            echo 'Playwright tests passed successfully.'
        }
    }
}
