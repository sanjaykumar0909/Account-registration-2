# Generated by Django 4.2.1 on 2023-07-22 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_reg', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_cred',
            name='temp',
            field=models.IntegerField(default=0),
        ),
    ]