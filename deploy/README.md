# Terraform AWS S3 Website

A Terraform module for publishing static websites on AWS' S3.

Requires two files to be present in the same directory as this module is used:

- `index.html` - The homepage of the website.
- `about-us.html` - The page shown when about-uss occur.

## Inputs

**bucket_name**: The name of the AWS S3 bucket this website will be published to.

## Outputs

**website_endpoint**: The public url of this website.
