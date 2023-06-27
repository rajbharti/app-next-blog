---
title: "REST API with curl"
date: "2023-02-23"
---

*curl* is a command-line tool for transferring data, and it supports about 22 protocols, including HTTP.

```shell
# verbose (with headers)
curl -v http://www.example.com/

# output response body to file
curl -o out.json http://www.example.com/
```

### GET

```shell
curl https://jsonplaceholder.typicode.com/posts/1
```

### POST

```shell
# default Content-Type: application/x-www-form-urlencoded
curl -d "title='new post'&body='dummy content'" \
	https://jsonplaceholder.typicode.com/posts

curl -d '{"title":"new post","body":"dummy content"}' \
	-H 'Content-Type: application/json' \
	https://jsonplaceholder.typicode.com/posts

# passing json file
curl -d @request.json \
	-H "Content-Type: application/json" \
	https://jsonplaceholder.typicode.com/posts
```

### PUT

```shell
curl -d '{"title":"new post 1"}' \
	-H 'Content-Type: application/json' \
	-X PUT https://jsonplaceholder.typicode.com/posts/1
```

### DELETE

```shell
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1
```

### Authentication

```shell
curl --user baeldung:secretPassword http://example.com/

curl -H "Authorization: Bearer b1094abc0-54a4-3eab-7213-877142c33fh3"  http://example.com/
```
