<script setup lang="ts">
import { ref,reactive, readonly } from 'vue'
import { usLayout, Key } from "../keyboardMaps"

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

</script>

<template>
    <div v-for="[name,key] in usLayout" :key="name" class="keyWrapper">
        <button :name="name" :class="'keyWidth-'+key.coord[3]+' keyBorder'" @mouseover="hoverKey" @mouseleave="unhoverKey">
            {{key.name}}
        </button>
        <div :class="'keyWidth-'+key.coord[2]"></div>
    </div>
</template>