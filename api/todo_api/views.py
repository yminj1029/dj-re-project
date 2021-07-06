from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from todo_api.models import Todo
from todo_api.serializers import TodoSerializer
from rest_framework.decorators import api_view

# ID 만들기위한 날짜 받아오기
from datetime import datetime


@api_view(['GET', 'POST', 'DELETE'])
def todos_list(request):
    if request.method == 'GET':
        todos = Todo.objects.all()

        todo_title = request.GET.get('todo_title', None)
        if todo_title is not None:
            todos = todos.filter(todo_title__icontains=todo_title)

        todos_serializer = TodoSerializer(todos, many=True)
        return JsonResponse(todos_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        todo_data = JSONParser().parse(request)
        todo_id = MakeId(todo_data["todo_title"])
        todo_data["todo_id"] = todo_id
        todo_serializer = TodoSerializer(data=todo_data)
        if todo_serializer.is_valid():
            todo_serializer.save()
            return JsonResponse(todo_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Todo.objects.all().delete()
        return JsonResponse({'message': '{} todos were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


def MakeId(title):
    today = datetime.today().strftime("%y%m%d%h%m%s")
    todo_id = title+today
    return todo_id
