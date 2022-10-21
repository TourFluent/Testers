provider "aws" {
  region  = "us-east-1"
}

terraform {
  backend "s3" {
      bucket = "shashikalastorage"
      key    = "build/terraform.tfstate"
      region = "us-east-1"
  } 
} 

data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type = "AWS"
    }
    resources = [
      "arn:aws:s3:::tourfluent/*"
    ]
  }
}

resource "aws_s3_bucket" "s3Bucket" {
     bucket = "tourfluent"
     acl       = "public-read"

     policy = data.aws_iam_policy_document.website_policy.json

   website {
       index_document = "index.html"
   }
}
