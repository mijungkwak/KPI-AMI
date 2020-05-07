provider "aws" {
    profile    = "aws_provider"
    region     = "ap-northeast-2"
    access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

resource "aws_iam_instance_profile" "obd-instace_profile" {
  name = "obd-instace_profile"
  role = "EC2codeDeploy-kwak"
}

resource "aws_instance" "Vue" {
  ami           = var.aws_ami_id
  instance_type = "t2.micro"
  key_name = "hanju"

  iam_instance_profile  {
    arn = "${aws_iam_instance_profile.obd-instace_profile.arn}"
  }

  tags = {
    Name = "obd-template-instance"
  }
}
