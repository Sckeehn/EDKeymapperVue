<script setup lang="ts">
import { loadKeybinds } from '../xml'
import { cache,state } from '../types'

defineProps<{ msg: string }>()

// retrieves cache

function uploadFile (event:any) {
  let file = event.target.files[0]
  let fr = new FileReader()
  // reads content of file
  fr.onload = (e:any) => {
    let data = e.target.result
    loadKeybinds(data)
    //bug for this toggle, quick fix
    if(cache.keybinds.length > 0) {
      state.current = "uploaded"
    }
  }
  fr.readAsText(file)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  
  <input type="file" accept="application/xml" name="keymapFile" id="fileSelectButton" @change="uploadFile"/>
  <label id="savior" for="fileSelectButton">Choose Binds File</label>


</template>
