<script setup lang="ts">
import { ref,reactive, readonly } from 'vue'
import { keys, Key, selection } from "../keyboardMaps"

defineProps<{ msg:string }>();

const hoverActions = reactive({
  is_hover: false,
  location: [0,0]
})

function hoverKey(event:any){
    hoverActions.is_hover=true
    hoverActions.location = [event.clientX,event.clientY]
}

function unhoverKey(event:any){
    hoverActions.is_hover=false
    hoverActions.location = [0,0]
}
// if selection.settings has a keybind, match it to the key

</script>

<template>
    <div v-for="[name,key] in keys.usLayout" :key="name" class="TKLkeyWrapper">
        <button :name="name" :class="'keyWidth-'+key.coord[3]+' keyBorder keyState-' + key.coord[4]" @mouseover="hoverKey" @mouseleave="unhoverKey">
            {{key.name}}
        </button>
        <div :class="'keyWidth-'+key.coord[1]"></div>
    </div>
</template>