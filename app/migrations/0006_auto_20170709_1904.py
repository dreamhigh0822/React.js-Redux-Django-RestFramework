# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-09 23:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20170628_1940'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='snippet',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='snippet',
            name='modified_by',
        ),
        migrations.DeleteModel(
            name='Snippet',
        ),
    ]