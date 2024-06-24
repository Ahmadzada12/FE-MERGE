<template>
  <div class="comment-list-container">
    <div v-for="comment in comments" :key="comment.id" class="comment-item">
      <img :src="comment.avatar" alt="Avatar" class="avatar" />
      <div class="comment-content">
        <div class="comment-name">{{ comment.name }}</div>
        <div class="comment-text">{{ comment.text }}</div>
        <div class="comment-date">{{ comment.date }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
  avatar: string;
}

export default defineComponent({
  name: 'CommentList',
  props: {
    comments: {
      type: Array as () => Comment[],
      required: true
    }
  }
});
</script>
<style scoped>
.comment-list-container {
  max-width: 100%;
  max-height: 400px; /* Set a max height to limit the scroll area */
  overflow-y: auto;
  padding: 16px;
  background-color: white; /* Fixed background */
  border: 1px solid #e0e0e0; /* Border to define right edge */
  border-radius: 8px;
}

.comment-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.comment-item:last-child {
  margin-bottom: 0;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-cover: cover;
}

.comment-content {
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 64px); /* Prevent content from overflowing the container */
}

.comment-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.comment-text {
  margin-bottom: 4px;
  color: #555;
}

.comment-date {
  font-size: 0.875rem;
  color: #999;
}
</style>
