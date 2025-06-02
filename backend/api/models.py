from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('archived', 'Archived'),
    )
    
    CATEGORY_CHOICES = (
        ('work', 'Work'),
        ('personal', 'Personal'),
        ('hobby', 'Hobby'),
        ('other', 'Other'),
    )
    
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return self.name