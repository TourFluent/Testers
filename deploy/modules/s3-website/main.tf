resource "aws_s3_bucket" "static_site" {
  bucket = "${var.bucket_name}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    
  }
}

resource "aws_s3_bucket_object" "index" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "index.html"
  source       = "html/index.html"
  content_type = "text/html"
  etag         = "${md5(file("html/index.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "about-us" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "about-us.html"
  source       = "html/about-us.html"
  content_type = "text/html"
  etag         = "${md5(file("html/about-us.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "about-us1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "about-us.css"
  source       = "html/about-us.css"
  content_type = "style/css"
  etag         = "${md5(file("html/about-us.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "hidden-places" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "hidden-places.html"
  source       = "html/hidden-places.html"
  content_type = "text/html"
  etag         = "${md5(file("html/hidden-places.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "hidden-places1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "hidden-places.css"
  source       = "html/hidden-places.css"
  content_type = "style/css"
  etag         = "${md5(file("html/hidden-places.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "landing-page" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "landing-page.css"
  source       = "html/landing-page.css"
  content_type = "style/css"
  etag         = "${md5(file("html/landing-page.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "log-in" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "log-in.html"
  source       = "html/log-in.html"
  content_type = "text/html"
  etag         = "${md5(file("html/log-in.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "log-in1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "log-in.css"
  source       = "html/log-in.css"
  content_type = "style/css"
  etag         = "${md5(file("html/log-in.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "package-info" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "package-info.html"
  source       = "html/package-info.html"
  content_type = "text/html"
  etag         = "${md5(file("html/package-info.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "package-info1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "package-info.css"
  source       = "html/package-info.css"
  content_type = "style/css"
  etag         = "${md5(file("html/package-info.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "sign-in" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "sign-in.html"
  source       = "html/sign-in.html"
  content_type = "text/html"
  etag         = "${md5(file("html/sign-in.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "sign-in1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "sign-in.css"
  source       = "html/sign-in.css"
  content_type = "style/css"
  etag         = "${md5(file("html/sign-in.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "style" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "style.css"
  source       = "html/style.css"
  content_type = "style/css"
  etag         = "${md5(file("html/style.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "tour-packages" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "tour-packages.html"
  source       = "html/tour-packages.html"
  content_type = "text/html"
  etag         = "${md5(file("html/tour-packages.html"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "tour-packages1" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "tour-packages.css"
  source       = "html/tour-packages.css"
  content_type = "style/css"
  etag         = "${md5(file("html/tour-packages.css"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "package" {
  bucket       = "${aws_s3_bucket.static_site.bucket}"
  key          = "package.json"
  source       = "html/package.json"
  content_type = "application/json"
  etag         = "${md5(file("html/package.json"))}"
  acl          = "public-read"
}

resource "aws_s3_bucket_object" "public" {
    bucket = "${aws_s3_bucket.static_site.bucket}"
    acl    = "public-read"
    key    = "public/"
    source = "/dev/null"
}

resource "aws_s3_bucket_object" "playground_assets" {
    bucket = "${aws_s3_bucket.static_site.bucket}"
    acl    = "public-read"
    key    = "public/playground_assets/"
    source = "/dev/null"
}

resource "aws_s3_bucket_object" "dist" {
  for_each = fileset("/Users/shashank/Desktop/smitha project/live/website/html/public/playground_assets/", "*")

  bucket = "${aws_s3_bucket.static_site.bucket}"
  key    = each.value
  source = "/Users/shashank/Desktop/smitha project/live/website/html/public/playground_assets/${each.value}"
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag   = filemd5("/Users/shashank/Desktop/smitha project/live/website/html/public/playground_assets/${each.value}")
  acl    = "public-read"
}

resource "aws_s3_bucket_object" "components" {
    bucket = "${aws_s3_bucket.static_site.bucket}"
    acl    = "public-read"
    key    = "components/"
    source = "/dev/null"
}

resource "aws_s3_bucket_object" "dist1" {
  for_each = fileset("/Users/shashank/Desktop/smitha project/live/website/html/components/", "*")
  bucket = "${aws_s3_bucket.static_site.bucket}"
  key    = each.value
  source = "/Users/shashank/Desktop/smitha project/live/website/html/components/${each.value}"
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag   = filemd5("/Users/shashank/Desktop/smitha project/live/website/html/components/${each.value}")
  acl    = "public-read"
  
}