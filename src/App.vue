<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Upload from './components/Upload.vue'
import Editor from './components/Editor.vue'

import { provide, inject } from 'vue'
import { state,store } from './types'

</script>
<template>
  <div>Current State: {{ state.current }}</div>
  <div v-show="state.current =='home'">
    <Upload msg='i hate my life'/>
  </div>
  <div v-show="state.current == 'uploaded'">
    <Editor msg='fuckles' />
  </div>
</template>

<style>

</style>
