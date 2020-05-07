provider "aws" {
    profile    = "aws_provider"
    region     = "ap-northeast-2"
    access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

resource "aws_instance" "Vue" {
  ami           = var.aws_ami_id
  instance_type = "t2.micro"
  key_name = "hanju"

  tags = {
    Name = "obd-template-instance"
  }
}
