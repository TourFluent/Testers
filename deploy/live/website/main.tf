provider "aws" {
  region = "us-east-1"
  profile = "shashikala"
}

module "s3-website" {
  source = "../../modules/s3-website"

  bucket_name = "tourfluent-1"
}

output "website_endpoint" {
  value = module.s3-website.website_endpoint
}

