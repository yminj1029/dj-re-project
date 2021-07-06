from rest_framework import serializers
from todo_api.models import Todo

# 모델 관리 JSON같은 컨텐츠 유형으로 변환해준다.


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('todo_id', 'todo_title', 'user_id',
                  'check_date', 'created_at', 'updated_at', 'ongoing')
