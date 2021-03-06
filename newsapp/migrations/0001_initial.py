# Generated by Django 2.2.7 on 2019-11-26 09:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField(null=True)),
                ('author', models.CharField(max_length=120, null=True)),
                ('category', models.CharField(max_length=120, null=True)),
                ('topic', models.CharField(max_length=120, null=True)),
                ('description', models.TextField(null=True)),
                ('publishedAt', models.DateTimeField(null=True)),
                ('url', models.TextField(null=True, validators=[django.core.validators.URLValidator()])),
                ('urlToImage', models.TextField(null=True, validators=[django.core.validators.URLValidator()])),
            ],
            options={
                'verbose_name_plural': 'News',
            },
        ),
    ]
