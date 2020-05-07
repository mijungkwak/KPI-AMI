pipeline {
  agent any
  stages {
    stage('Build AMI') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/
./packer build -var-file=var.json /var/lib/jenkins/workspace/AMI-Build_master/AMI-UI/packer/front_ami_build.json'''
      }
    }

  }
}