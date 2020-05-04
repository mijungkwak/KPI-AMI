pipeline {
  agent any
  stages {
    stage('AMI Create') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/KPI-AMI_master/
echo "AMI Create"'''
      }
    }

    stage('Instance Create') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/KPI-AMI_master/
echo "Instance Create"'''
      }
    }

    stage('Code Deploy') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/KPI-AMI_master/
echo "Code Deploy"'''
      }
    }

  }
}