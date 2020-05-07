pipeline {
  agent any
  stages {
    stage('Git Clone') {
      steps {
        sh 'echo "test"'
      }
    }

    stage('AMI Build') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/
./packer build -var-file=var.json /var/lib/jenkins/workspace/KPI-AMI_master/AMI-UI/packer/front_ami_build.json'''
      }
    }

    stage('Get AMI ID') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/
sudo ./ami.sh
'''
      }
    }

    stage('Instance Create') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/
terraform apply -auto-approve -lock=false -var-file=var.json -var-file=uiami.json /var/lib/jenkins/workspace/KPI-AMI_master/Terraform/'''
      }
    }

  }
}