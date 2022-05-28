<script setup lang="ts">
import { ref,reactive, readonly } from 'vue'
import { usNumPad, Key } from "../keyboardMaps"

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
    <div id="spacer" class="keyWidth-20"></div>
    <div v-for="[name,key] in usNumPad" :key="name" class="numkeyWrapper">
        <button v-if="name == 'Key_numplus' || name == 'Key_numEnter'" :name="name" class="tallboy keyBorder" @mouseover="hoverKey" @mouseleave="unhoverKey">
            {{ key.name }}
        </button>
        <button v-else :name="name" :class="'keyWidth-'+key.coord[3]+' keyBorder'" @mouseover="hoverKey" @mouseleave="unhoverKey">
            {{key.name}}
        </button>
        <div :class="'keyWidth-'+key.coord[2]"></div>
    </div>
</template>