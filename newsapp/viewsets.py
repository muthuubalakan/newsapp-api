from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import NewsListSerializer, NewsDetailSerializer
from .models import News
from .newsapi_services import NEWSAPIService


class NewsView(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('publishedAt')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return NewsDetailSerializer
        return NewsListSerializer
    
    def list(self, request):
        query = self.request.query_params.get('q', None)
        if query:
            queryset = self.get_queryset().filter(category=query)
            if not queryset:
                api_service = NEWSAPIService(query=query)
                api_service.get_allnews()
                api_service.get_headlines()
                queryset = self.get_queryset().filter(category=query)
            
        else:
            queryset = self.get_queryset()
            if not queryset:
                api_service = NEWSAPIService()
                api_service.get_allnews()
                api_service.get_headlines()
                queryset = self.get_queryset()

        serializer = self.get_serializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)