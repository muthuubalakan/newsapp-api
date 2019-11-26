from rest_framework import serializers
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import News



class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ("id",
                  "title",
                  "author",
                  "publishedAt",
                  "description",
                  "content",
                  "category",
                  "url",
                  "urlToImage",
                  "topic",
        )
        

class NewsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ("id",
                  "title",
                  "author",
                  "publishedAt",
                  "description",
                  "urlToImage",
                  "category",
                  "topic",
        )
        
        
class NewsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ("id",
                  "title",
                  "author",
                  "publishedAt",
                  "content",
                  "url",
                  "urlToImage",
                  "category",
                  "topic",
        )