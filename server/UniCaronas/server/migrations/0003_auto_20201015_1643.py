# Generated by Django 3.1.2 on 2020-10-15 16:43

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_trip_hour'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='day',
            field=models.IntegerField(verbose_name=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='trip',
            name='hour',
            field=models.TimeField(default=datetime.datetime(2020, 10, 15, 16, 43, 29, 567796)),
        ),
    ]
