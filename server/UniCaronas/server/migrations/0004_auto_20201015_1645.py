# Generated by Django 3.1.2 on 2020-10-15 16:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_auto_20201015_1643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='day',
            field=models.IntegerField(default='django.utils.timezone.now'),
        ),
        migrations.AlterField(
            model_name='trip',
            name='hour',
            field=models.TimeField(default=datetime.datetime(2020, 10, 15, 16, 45, 36, 128354)),
        ),
    ]