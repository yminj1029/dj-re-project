from django.db import models

# Create your models here.
# 테이블을 정의하는 파일, 데이터 베이스 처리를 ORM기법을 사용한다.


class Todo(models.Model):
    todo_id = models.CharField(
        max_length=70, blank=False, primary_key=True)  # blank는 required의미, null은 db에 null값 들어가도 ok
    todo_title = models.CharField(
        max_length=70, blank=False)
    user_id = models.CharField(
        max_length=70, blank=False)
    # json serialized text version of your list
    check_date = models.TextField(null=True)
    # auto를 사용하고 싶다면 null=True가 필요
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now=True, null=True)
    # todo에서 삭제했다면 False, 아니라면 True : 삭제해도 기록 남아있게 함.
    ongoing = models.BooleanField(default=True)
# ???
