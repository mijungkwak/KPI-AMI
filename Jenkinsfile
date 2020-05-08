pipeline {
  agent any
  stages {
    stage('Git Clone') {
      steps {
        git(url: 'https://github.com/mijungkwak/KPI-AMI.git', branch: 'master', poll: true, credentialsId: 'git:996e1f714b08e971ec79e3bea686287e66441f043177999a13dbc546d8fe402a')
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
sudo ./instanceRun.sh
'''
      }
    }

    stage('App Download') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/App/
sudo git clone https://github.com/ju0731/automation.git

'''
      }
    }

    stage('App Upload') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/App/automation/
sudo zip -r devops.zip ./
aws s3 cp devops.zip s3://obd-s3-codedeploy-hanju-1/
'''
      }
    }

    stage('Deploy App') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/
aws deploy create-deployment \\
    --application-name obd-codeDeploy-test-hanju-1 \\
    --deployment-config-name CodeDeployDefault.AllAtOnce \\
    --deployment-group-name obd-deployGroup-test-hanju-1 \\
    --description "My demo deployment" \\
    --s3-location bucket=obd-s3-codedeploy-hanju-1,bundleType=zip,key=devops.zip
'''
      }
    }

  }
}