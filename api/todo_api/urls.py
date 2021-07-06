from django.conf.urls import url
from todo_api import views

urlpatterns = [
    url(r'^api/todos$', views.todos_list),
    # path(r'^api/todos/(?P<pk>[0-9]+)$', views.todos_detail),
    # path(r'^api/todos/published$', views.todos_list_published),
]
