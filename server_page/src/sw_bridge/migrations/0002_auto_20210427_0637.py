# Generated by Django 3.1.7 on 2021-04-27 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sw_bridge', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SyncwareControl',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default='', max_length=8, unique=True)),
                ('name', models.CharField(default='', max_length=32, unique=True)),
                ('password', models.CharField(max_length=32, unique=True)),
                ('user_start_sw', models.BooleanField(default=False)),
                ('user_restart_sw', models.BooleanField(default=False)),
                ('user_stop_sw', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='SyncwareForm',
        ),
    ]
