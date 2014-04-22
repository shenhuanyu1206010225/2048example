from django.contrib import admin

# Register your models here.
from main.models import *


class BookAdmin(admin.ModelAdmin):
    list_display = ('isbn', 'title', 'author', 'publisher', 'pubdate')


admin.site.register(Book)