FROM python:3.6-stretch
ENV PYTHONUNBUFFERED 1
ENV http_proxy=http://192.168.63.251:3128/
ENV https_proxy=https://192.168.63.251:3128/
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt
COPY . /app/
