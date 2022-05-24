<script setup lang="ts">
import { inject, reactive, onUpdated } from 'vue'
import { cache, state, Keybinds, Action } from '../types'
import { Settings, Weirdos } from '../ControlsList'

defineProps<{ msg: string }>()

//deprecated, basically replaced by changeShown()
function getFrom(lst:string[]){
    let working: Keybinds[] = []
    //iterate through lst
    for(const x in lst){
        for(const y in cache.keybinds){
            if(lst[x] == cache.keybinds[y].name){
                // console.log(cache.keybinds[y].name)
                working.push(cache.keybinds[y])
                console.log(working)
            }
        }
    }
    return working
}

const selection = reactive({
    value: 0,
    settings: [] as Keybinds[],
});

function changeShown(event:any){
    selection.value = parseInt(event.target.value)

    var working: Keybinds[] = []
    var first = Settings[selection.value].controls
    //console.log(first)
    for(const x in first){
        //console.log(first[x])
        for(const y in cache.keybinds){
            if( first[x] == cache.keybinds[y].name) {
                working.push(cache.keybinds[y])
            }
        }
    }
    selection.settings = working
    //console.log(cache.keybinds)
    //console.log(selection.settings)
}

function modifySlider(event:any){
    const value = event.target.value
    const fullname = event.target.name
    //account for subkeybinds
    const split = fullname.split('.')
    if(split.length > 2){
        const parent = split[0]
        const child = split[1]
        const grandchild = split[2]
        for(const x in cache.keybinds){
            if(cache.keybinds[x].name == parent){
                for(const y in cache.keybinds[x].section){
                    if(cache.keybinds[x].section[y].name == child){
                        for(const z in cache.keybinds[x].section[y].action){
                            if(cache.keybinds[x].section[y].action[z].name == grandchild){
                                cache.keybinds[x].section[y].action[z].val = value
                            }
                        }
                    }
                }
            }
        }
    }else{
        const parent = split[0]
        const child = split[1]
        for(const x in cache.keybinds){
            if(cache.keybinds[x].name == parent){
                for(const y in cache.keybinds[x].action){
                    if(cache.keybinds[x].action[y].name == child){
                        cache.keybinds[x].action[y].val = value
                    }
                }
            }
        }
    }
}

// onUpdated(() => {
//     if(cache.keybinds != undefined){
//       //selection.settings = getFrom(cache.keybinds) Ryan this makes an infinite loop
//    }
// })

</script>

<template>
<h1>{{ msg }}</h1>
<select id="preset" @change="changeShown">
    <option v-for="(content, i) in Settings" :value="i">
        {{ content.name }}
    </option>
</select>
<h1>{{ Settings[selection.value].name }}</h1>
<div id="test" v-for="item in selection.settings"> 
    <h3>{{ item.name }}</h3>
    <div v-if="item.action.length > 0">
        <div v-for="action in item.action">
            <input v-if="action.getType() == 'Bind'" type="text" :name="item.name+'.'+action.getName()" :value="action.getValue()">
            <div v-else-if="action.getType() == 'Slider'">
                <input type="range" :name="item.name+'.'+action.getName()" :value="action.getValue()" :min="action.min()" :max="action.max()" step=".001" @change="modifySlider">
                <input type="number" :name="item.name+'.'+action.getName()" :value="action.getValue()" :min="action.min()" :max="action.max()" @change="modifySlider">                
            </div>
            <input v-else-if="action.getType() == 'Toggle'" type="checkbox" :name="item.name+'.'+action.getName()" v-model="action.val">
            <select v-else-if="action.getType() == 'Dropdown'" :name="action.getName()">
                <option :value="item.name+'.'+action.getName()">{{action.getValue()}}</option>
                <div v-for="x in Weirdos.get(item.name)">
                    <option :value="Weirdos.get(item.name)">{{ Weirdos.get(item.name) }}</option>                
                </div>
            </select>
            <div v-else>
                YOU FUCKED UP
            </div>
        </div>
    </div>
    <div v-else>
        <div v-for="subkeybind in item.section">
            <label>{{subkeybind.name}}</label>
            <div v-for="action in subkeybind.action">
                <input v-if="action.getType() == 'Bind' || action.getType() == 'Dropdown'" type="text" :name="item.name+'.'+subkeybind.name+'.'+action.getName()" :value="action.getValue()">
                <div v-else-if="action.getType() == 'Slider'">
                    <input type="range" :name="item.name+'.'+subkeybind.name+'.'+action.getName()" :value="action.getValue()" :min="action.min()" :max="action.max()" step=".001" @change="modifySlider">
                    <input type="number" :name="item.name+'.'+subkeybind.name+'.'+action.getName()" :value="action.getValue()" :min="action.min()" :max="action.max()" @change="modifySlider">                
                </div>
                <input v-else-if="action.getType() == 'Toggle'" type="checkbox" :name="item.name+'.'+subkeybind.name+'.'+action.getName()" v-model="action.val">
                <!-- <select v-else-if="action.getType() == 'Dropdown'" :name="action.getName()"> -->
                    <!-- option -->
                <!-- </select> -->
                <div v-else>
                    YOU FUCKED UP
                </div>
            </div>
        </div>
    </div>
</div>
</template>
