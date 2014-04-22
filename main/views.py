from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from main.models import Book

# Create your views here.
def create_book(request):


# return HttpResponse("Welcome to the page at %s" % request.path)


def list_book(request):
    book = Book.object, all()
    return render_to_response("list_book.html", {book})
    # return HttpResponse("Welcome to the page at %s" % request.path)


def edit_book(request):


# return HttpResponse("Welcome to the page at %s" % request.path)


def view_book(request):

# return HttpResponse("Welcome to the page at %s" % request.path)