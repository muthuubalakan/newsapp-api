import requests
import urllib
from .models import News
from .serializers import NewsSerializer


API_URL = "https://newsapi.org/v2/"
API_KEY = "794eb5d9a5e94b6b866acd0ec508c801"
ALL_NEWS = "everything"
TOP_NEWS = "top-headlines"


class NEWSAPIService:
    def __init__(self, query=None):
        self.query_string = query
        self.countries = ["us", "de"]
        self.topics = ["technology", "bitcoin", "business"]
        self.category = None
    
    def headlines(self, country):
        if self.query_string:
            return f'{API_URL}{TOP_NEWS}?country={country}&category={self.query_string}&apiKey={API_KEY}'
        else:
            return f'{API_URL}{TOP_NEWS}?country={country}&apiKey={API_KEY}'
        
    def allnews(self, topic):
        if self.query_string:
            return f'{API_URL}{ALL_NEWS}?q={self.query_string}&apiKey={API_KEY}'
        else:
            return f'{API_URL}{ALL_NEWS}?q={topic}&apiKey={API_KEY}'
    
    def fetch_data(self, url):
        return self.parse_json(requests.get(url).json())
    
    def parse_json(self, data):
        articles = data['articles']
        for article in articles:
            if article['content']:
                self.save_article(article)
    
    def save_article(self, article):
        url = article.get('url', None)
        article.pop('source')
        article['category'] = self.query_string if self.query_string else self.category
        news, news_created = News.objects.get_or_create(
                       url=url, defaults=article)
        serializer = NewsSerializer(news, data=article)
        if serializer.is_valid():
            serializer.save()
    
    def get_headlines(self):
        self.category = 'headlines'
        for country in self.countries:
            self.fetch_data(self.headlines(country))
            
    def get_allnews(self):
        for topic in self.topics:
            self.category = topic
            self.fetch_data(self.allnews(topic))
            
