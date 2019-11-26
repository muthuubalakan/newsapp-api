from django.db import models
from django.core.validators import URLValidator


class News(models.Model):
    title  = models.CharField(max_length=255)
    content = models.TextField(null=True)
    author = models.CharField(max_length=120, null=True)
    category = models.CharField(max_length=120, null=True)
    topic = models.CharField(max_length=120, null=True)
    description = models.TextField(null=True)
    publishedAt = models.DateTimeField(null=True)
    url = models.TextField(validators=[URLValidator()], null=True)
    urlToImage = models.TextField(validators=[URLValidator()],  null=True)
    
    class Meta:
        verbose_name_plural = "News"
        app_label = 'newsapp'