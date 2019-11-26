# A Simple Newsapp with UI and API services.

Developed and implemented in Django with PostgreSQL.

## Table

The application uses a table called News which is created by Django ORM.

### Data Model.

A public news api service is used to fetch news and fetched data are stored into SQL table with following fields.

1. title : Title of the article.
2. author : Article's Author.
3. publishedAt : Published datetime stamp.
4. description : Short description about the article.
5. content : Whole content of the news.
6. category : News category such as Sports, Business, Economy, Technology etc.
7. url : url to the news source if available.
8. urlToImage : if the image is fetched from other source.
9. topic : topic of the article like Apple, Bitcoin, Gold and so on.

## Installation

Need docker to run. Check if docker is installed.

```bash
docker -v
```

## Build and Run

### Setup

If you behind proxy, set ENV variable in Dockerfile.

```Shell
#ENV http_proxy= (here http proxy)
#ENV https_proxy= (here https proxy)

```

Use Makefile to build image and run container.

```bash
make run
```
