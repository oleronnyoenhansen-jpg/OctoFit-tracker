from rest_framework import serializers
from .models import WorkoutSuggestion

class WorkoutSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutSuggestion
        fields = '__all__'
