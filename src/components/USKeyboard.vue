<script setup lang="ts">
import { usLayout, Key } from "../keyboardMaps"

defineProps<{ msg:string }>();

const gapKeys:string[] = [ "Key_F4", "Key_F8"]
const lineEndKeys:string[] = ["Key_pause", "Key_pageup", "Key_pagedown", "Key_enter"]
</script>

<template>
    <div v-for="keys in usLayout" class="keyWrapper">
        <div v-if="keys[1].coord[3] == 1" class="keyWidth1">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 1.25" class="keyWidth2">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 1.5" class="keyWidth3">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 1.75" class="keyWidth4">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 2" class="keyWidth5">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 2.25" class="keyWidth6">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 2.5" class="keyWidthEnter">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 2.75" class="keyWidth7">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 3" class="keyWidthRightShift">
        {{ keys[1].name }}
        </div>
        <div v-else-if="keys[1].coord[3] == 6.25" class="keyWidth8">
        {{ keys[1].name }}
        </div>
        <div v-if="gapKeys.includes(keys[0])" class="tripleGap"></div>
        <div v-else-if="keys[0] == 'Key_esc'" class="sixGap"></div>
        <div v-else-if="keys[0] == 'Key_rShift'" class="rShiftGap"></div>
        <div v-else-if="keys[0] == 'Key_enter'" class="enterGap"></div>
        <div v-else-if="keys[0] == 'Key_backspace' || keys[0] == 'Key_backslash'" class="doubleGap"></div>
        <div v-else-if="keys[0] == 'Key_upArrow'" class="upArrowGap"></div>
        <div v-else-if="keys[0] == 'Key_rCtrl'" class="rCtrlGap"></div>
        <div v-else-if="keys[0] == 'Key_F12'" class="doubleGap"></div>
        <div v-else class="gap"></div>
    </div>
</template>