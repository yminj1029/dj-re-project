# Generated by Django 3.2.4 on 2021-07-06 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_api', '0006_auto_20210706_1357'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='ongoing',
        ),
        migrations.AddField(
            model_name='todo',
            name='delete',
            field=models.BooleanField(default=False),
        ),
    ]
