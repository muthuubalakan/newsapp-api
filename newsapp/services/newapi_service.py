import requests
import urllib
from newsapp.models import News
from newsapp.serializers import NewsSerializer


API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=794eb5d9a5e94b6b866acd0ec508c801"

NEWS_API_KEY = "794eb5d9a5e94b6b866acd0ec508c801"
ALL_NEWS = "everything"
TOP_NEWS = "top-headlines"
COUNTRY = "us"



a = requests.get(API_URL)
b = a.json()
t = b['articles'][0]['content']
print(t)
    
    
# news, news_created = News.objects.get_or_create(
#                 url=mat.slug, defaults={"name": mat.name,
#                                               "group": mat.group})

# serializer = NewsSerializer(news, data={"name": mat.name,
#                                               "group": mat.group})
# if serializer.is_valid():
#     serializer.save()