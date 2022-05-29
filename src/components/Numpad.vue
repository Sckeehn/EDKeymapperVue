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
        <!-- keyWidth keyHeight keyBorder (optional)extraKey -->
        <button 
            :name="name"
            :class="'keyWidth-'+key.coord[3]+' keyHeight-'+key.coord[2]+' keyBorder'+((key.coord[2] == 1)?'':' extraKey')"
            @mouseover="hoverKey"
            @mouseleave="unhoverKey"
            >
            {{key.name}}
        </button>
        <div :class="'keyWidth-'+key.coord[1]"></div>
    </div>
</template>