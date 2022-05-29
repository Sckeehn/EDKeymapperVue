<script setup lang="ts">
import { inject, reactive, onUpdated } from "vue";
import { cache, state, Keybinds, Action } from "../types";
import { Settings, Weirdos } from "../ControlsList";
import { selection, keys, defaultUS } from "../keyboardMaps"

defineProps<{ msg: string }>();

function resetKeys() {
  if(cache.layout.includes("US")){
    console.log(defaultUS)
    keys.layout = new Map(defaultUS)
  }else{
    console.log("Unknown layout")
  }
}

//deprecated, basically replaced by changeShown()
function getFrom(lst: string[]) {
  let working: Keybinds[] = [];
  //iterate through lst
  for (const x in lst) {
    for (const y in cache.keybinds) {
      if (lst[x] == cache.keybinds[y].name) {
        // console.log(cache.keybinds[y].name)
        working.push(cache.keybinds[y]);
        console.log(working);
      }
    }
  }
  return working;
}

function changeShown(event: any) {
  resetKeys()
  selection.value = parseInt(event.target.value);
  var working: Keybinds[] = [];
  var first = Settings[selection.value].controls;
  for (const x in first) {
    for (const y in cache.keybinds) {
      if (first[x] == cache.keybinds[y].name) {
        working.push(cache.keybinds[y])
      }
    }
  }
  selection.settings = working;
  for(let item of selection.settings){
    if(item.section.length > 0){
      //subkeybinds go here
      for(const x in item.section){
        for(const y in item.section[x].action){
          if(keys.layout.has(item.section[x].action[y].val)){
            //get the key coord
            let key = keys.layout.get(item.section[x].action[y].val)
            let coord: number[] = (key == undefined)? [0,0,0,0]: key.coord

            if(coord.length == 5){
              coord[4] = 1
            }
            var tempKey = {
              name: String(keys.layout.get(item.section[x].action[y].val)?.name),
              coord: coord
            }
            keys.layout.set(item.section[x].action[y].val, tempKey)
          }
        }
      }
    }
    else{
      for(const x in item.action){
        if(keys.layout.has(item.action[x].val)){
          //get the key coord
          let key = keys.layout.get(item.action[x].val)
          let coord: number[] = (key == undefined)? [0,0,0,0]: key.coord

          if(coord.length == 4){
            coord[4] = 1
          }
          var tempKey = {
            name: String(keys.layout.get(item.action[x].val)?.name),
            coord: coord
          }
          keys.layout.set(item.action[x].val, tempKey)
        }
      }
    }
  }
}

function modify(event: any) {
  const value = event.target.value;
  const fullname = event.target.name;
  const split = fullname.split(".");
  if(split.length > 2){
    //account for subkeybinds
    const parent = split[0];
    const child = split[1];
    const grandchild = split[2];
    for (const x in cache.keybinds) {
      if (cache.keybinds[x].name == parent) {
        for (const y in cache.keybinds[x].section) {
          if (cache.keybinds[x].section[y].name == child) {
            for (const z in cache.keybinds[x].section[y].action) {
              if (cache.keybinds[x].section[y].action[z].name == grandchild) {
                cache.keybinds[x].section[y].action[z].val = value;
              }
            }
          }
        }
      }
    }
  }else{
    const parent = split[0];
    const child = split[1];
    for (const x in cache.keybinds) {
      if (cache.keybinds[x].name == parent) {
        for (const y in cache.keybinds[x].action) {
          if (cache.keybinds[x].action[y].name == child) {
            cache.keybinds[x].action[y].val = value;
          }
        }
      }
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <select id="preset" @change="changeShown">
    <option v-for="(content, i) in Settings" :key="i" :value="i">
      {{ content.name }}
    </option>
  </select>
  <h1>{{ Settings[selection.value].name }}</h1>
  <div id="test" v-for="item in selection.settings" :key="item.name">
    <h3>{{ item.name }}</h3>
    <div v-if="item.action.length > 0">
      <div v-for="action in item.action" :key="action.name">
        <input
          v-if="action.getType().includes('Bind')"
          type="text"
          :name="item.name + '.' + action.getName()"
          :value="action.getValue()"
          @change="modify"
        />
        <div v-else-if="action.getType() == 'Slider'">
          <input
            type="range"
            :name="item.name + '.' + action.getName()"
            :value="action.getValue()"
            :min="action.min()"
            :max="action.max()"
            step=".001"
            @change="modify"
          />
          <input
            type="number"
            :name="item.name + '.' + action.getName()"
            :value="action.getValue()"
            :min="action.min()"
            :max="action.max()"
            step=".001"
            @change="modify"
          />
        </div>
        <input
          v-else-if="action.getType() == 'Toggle'"
          type="checkbox"
          :name="item.name + '.' + action.getName()"
        />
        <select
          v-else-if="action.getType() == 'Dropdown'"
          :name="item.name + '.' + action.getName()"
          @change="modify"
        >
          <!-- change css since this option represents current -->
          <option :value="action.getValue()">
            {{ action.getValue() }}
          </option>
          <option v-for="x in Weirdos.get(item.name)" :key="x" :value="x">
            {{ x }}
          </option>
        </select>
        <div v-else>YOU FUCKED UP</div>
      </div>
    </div>
    <div v-if="item.section.length > 0">
      <div v-for="subkeybind in item.section" :key="subkeybind.name">
        <label>{{ subkeybind.name }}</label>
        <div v-for="action in subkeybind.action" :key="action.name">
          <input
            v-if="action.getType().includes('Bind')"
            type="text"
            :name="item.name + '.' + subkeybind.name + '.' + action.getName()"
            :value="action.getValue()"
            @change="modify"
          />
          <div v-else-if="action.getType() == 'Slider'">
            <input
              type="range"
              :name="item.name + '.' + subkeybind.name + '.' + action.getName()"
              :value="action.getValue()"
              :min="action.min()"
              :max="action.max()"
              step=".001"
              @change="modify"
            />
            <!-- FIX CSS, IT LOOKS TERRIBLE -->
            <!-- FUCK OFF RYAN -->
            <input
              type="number"
              :name="item.name + '.' + subkeybind.name + '.' + action.getName()"
              :value="action.getValue()"
              :min="action.min()"
              :max="action.max()"
              step=".001"
              @change="modify"
            />
          </div>
          <input
            v-else-if="action.getType() == 'Toggle'"
            type="checkbox"
            :name="item.name + '.' + subkeybind.name + '.' + action.getName()"
            @change="modify"
          />
          <select
            v-else-if="action.getType() == 'Dropdown'"
            :name="item.name + '.' + subkeybind.name + '.' + action.getName()"
            @change="modify"
          >
            <!-- change css since this option represents current -->
            <option :value="action.getValue()">
              {{ action.getValue() }}
            </option>
            <option v-for="x in Weirdos.get(item.name)" :value="x" :key="x">
              {{ x }}
            </option>
          </select>
          <div v-else>YOU FUCKED UP</div>
        </div>
      </div>
    </div>
  </div>
</template>