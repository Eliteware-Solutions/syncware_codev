# Generated by Django 3.1.7 on 2021-03-16 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('device', '0002_device_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='device',
            name='robot_brand',
            field=models.TextField(default=True),
        ),
    ]
