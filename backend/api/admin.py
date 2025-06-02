from django.contrib import admin
from .models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'status', 'user', 'created_at', 'updated_at')
    list_filter = ('status', 'category', 'created_at')
    search_fields = ('name', 'description', 'user__username')
    date_hierarchy = 'created_at'