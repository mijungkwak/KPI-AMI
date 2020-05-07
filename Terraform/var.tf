variable "aws_access_key" {
    type    = string
    default="{{aws_access_key}}"
    description = "Your access key"
}
variable "aws_secret_key" {
    type    = string
    default="{{aws_secret_key}}"
    description = "Your secret key"
}
variable "aws_ami_id" {
    type    = string
    default="{{aws_ami_id}}"
    description = "Your ami id"
}