<script setup lang="ts">
import { ref,reactive, readonly } from 'vue'
import { keys, Key, selection, currentKeys } from "../keyboardMaps"

defineProps<{ msg:string }>();

const hoverActions = reactive({
  is_hover: false,
  location: [0,0],
  hover_element: '',
})

function hoverKey(event:any){
    hoverActions.is_hover=true
    hoverActions.location = [event.clientX,event.clientY],
    hoverActions.hover_element = event.target.name
    // console.log(event.target)
    // console.log(currentKeys)
    // console.log(currentKeys.get(event.target.name))
}

function unhoverKey(event:any){
    hoverActions.is_hover=false
    hoverActions.location = [0,0],
    hoverActions.hover_element = ''
}
// if(hoverActions.is_hover){
//  set the text of a hidden div to that of hover_elements matching key
//  show hidden div
// }

</script>

<template>
    <div v-for="[name,key] in keys.layout" :key="name" class="TKLkeyWrapper">
        <button :name="name" :class="'keyWidth-'+key.coord[3]+' keyBorder keyState-' + key.coord[4]" @mouseover="hoverKey" @mouseleave="unhoverKey">
            {{key.name}}
        </button>
        <div :class="'keyWidth-'+key.coord[1]"></div>
    </div>
    <div v-if="hoverActions.is_hover == true">
    {{ currentKeys.get(hoverActions.hover_element) }}
    </div>
</template>