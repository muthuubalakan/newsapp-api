# A Simple Newsapp with UI and API services.

Example of using Django, PostgreSQL, and Angular together and containerizing the app.

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


## UI

**Newsfeed**

![alt text](https://github.com/muthuubalakan/newsapp-api/blob/master/docs/newsfeed.PNG)


**Details**

![alt text](https://github.com/muthuubalakan/newsapp-api/blob/master/docs/details.PNG)

**Theming**

For the theming, Angular material pre-built 'indigo-pink.css' is used. 
Refer https://material.io/design/

**Futher development**

The UI can be developed further with Angular 8. (link to the Angular8 Frontend [here](https://github.com/muthuubalakan/newsapp)).

Run ```ng build``` and copy all files in the dist/newsapp to /static/ folder after removing previous js files.

Note: The project uses development version of ng build files. Please change the index.html according to the js files when run ```ng build --prod ``` (in production version).

## Installation

Need docker to run. Check if docker is installed.

```bash
docker -v
```
**Image dependecies**

1. Python 3
2. Postgres


## Build and Run

### Setup

If you are behind proxy, set ENV variable in Dockerfile.

```Shell
#ENV http_proxy= (here http proxy)
#ENV https_proxy= (here https proxy)

```

Use Makefile to build image and run container.

```bash
make run
```
