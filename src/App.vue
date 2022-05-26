<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Upload from './components/Upload.vue'
import Editor from './components/Editor.vue'
import { provide, inject } from 'vue'
import { state,store } from './types'
import USKeyboard from './components/USKeyboard.vue'
import Numpad from './components/Numpad.vue'
import mouseControls from './components/mouseControls.vue'

</script>
<template>
  <div class="navbar">Current State: {{ state.current }}</div>
  <div v-show="state.current =='home'" id="getStarted">
    <Upload msg='Elite Dangerous Keyap Wizard'/>
  </div>
    <div v-show="state.current == 'uploaded'" id="biggestWrapper">
      <div id="left_bar">
      <Editor msg='fuckles' />
      </div>
        <div id="bigWrapper">
        <USKeyboard msg='AAAAAAAAAA' />
        </div>
        <div id="numWrapper">
        <Numpad msg=''/>
        </div>
        <div id="mouseWrapper">
        <mouseControls msg=""/>
        </div>
    </div>
</template>

<style>

</style>
