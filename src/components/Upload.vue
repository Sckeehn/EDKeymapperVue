<script setup lang="ts">
import { inject, ref } from 'vue'
import { Category, Settings, Weirdos } from "../ControlsList"
import { getKeybinds } from '../xml'
import { cache,state,store,Keybinds,Toggle,Bind,Slider, Dropdown } from '../types'

defineProps<{ msg: string }>()

// retrieves cache

const output = ref({})

function uploadFile (event:any) {
  let file = event.target.files[0]
  let fr = new FileReader()
  // reads content of file
  fr.onload = (e:any) => {
    let data = e.target.result
    let keybinds = getKeybinds(data)
    output.value = keybinds
    state.current = "uploaded"
    let settings: Keybinds[] = []
    for(const keybind in keybinds.Root){
      if(keybind == "KeyboardLayout"){
        cache.layout = keybinds.Root[keybind]
        continue
      }
      let category = new Keybinds(keybind)
      //divide into sections and actions
      if(keybinds.Root[keybind]["Value"]!=undefined){
        let value = keybinds.Root[keybind]["Value"]
        if(Weirdos.has(keybind)){
          category.addAction(new Dropdown(keybind, value))
        } else if(!isNaN(value) && value.toString().indexOf('.') != -1){
          category.addAction(new Slider(keybind,value))
        } else if(!isNaN(value)){
          category.addAction(new Toggle(keybind,value))
        } else {
          category.addAction(new Bind(keybind,value))
        }
      }else{
        for(const subkeybind in keybinds.Root[keybind]){
          const value = keybinds.Root[keybind][subkeybind]["Value"]
          let subcat = new Keybinds(subkeybind)
          if(value == undefined){
            const device = keybinds.Root[keybind][subkeybind]["Device"]
            const action = keybinds.Root[keybind][subkeybind]["Key"]
            category.addAction(new Bind(device,action))
          }else{
            if(Weirdos.has(keybind)){
              category.addAction(new Dropdown(subkeybind, value))
            } else if(!isNaN(value) && value.toString().indexOf('.') != -1){
              subcat.addAction(new Slider(subkeybind,value))
            } else if(!isNaN(value)){
              subcat.addAction(new Toggle(subkeybind,value))
            } else {
              subcat.addAction(new Bind(subkeybind,value))
            }
          }
          category.addSection(subcat)
        }
      }
      settings.push(category)
    }
    console.log(settings)
    cache.keybinds = settings
  }
  fr.readAsText(file)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  
  <input type="file" accept="application/xml" name="keymapFile" id="fileSelectButton" @change="uploadFile"/>
  <label id="savior" for="fileSelectButton">Choose Binds File</label>


</template>
