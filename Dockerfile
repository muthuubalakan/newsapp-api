FROM python:3.6-stretch
ENV PYTHONUNBUFFERED 1
# ENV http_proxy= set the proxy here
# ENV https_proxy= set the proxy here
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt
COPY . /app/
