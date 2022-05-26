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
    <div class="mouseWrapper">
        <div id="mouseBox1">
        
        </div>
        <div id="mouseBox2">
            <img src="UpArrow.png" id="arrowUp" />
        </div>
        <div id="mouseBox3">
        
        </div>
        <div id="mouseBox4">
            <img src="LeftArrow.png" id="arrowLeft" />
        </div>
        <div id="mouseBox5">
            <img src="RyansMagnumOpus.png" id="mouse">
        </div>
        <div id="mouseBox6">
            <img src="RightArrow.png" id="arrowRight"/>
        </div>
        <div id="mouseBox7">
        
        </div>
        <div id="mouseBox8">
            <img src="DownArrow.png" id="arrowDown"/>
        </div>
        <div id="mouseBox9">
        
        </div>
    </div>
</template>