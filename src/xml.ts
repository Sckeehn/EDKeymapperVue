import { XMLParser } from 'fast-xml-parser'
import { cache,Keybinds,Toggle,Bind,Slider, Dropdown } from './types'
import { Settings, Weirdos } from "./ControlsList"
import { selection, keys, defaultUS, mouseMap } from './keyboardMaps'

export function loadKeybinds (file:string) {
    const option = {
        ignoreAttributes: false,
        attributeNamePrefix: '',
    }
    const parser = new XMLParser (option)
    const parsed = parser.parse(file)
    parsed["Root"]["MouseGUI"] = {
    "Value": parsed["Root"]["MouseGUI"][0]["Value"]
    }
    // info(keybinds["Root"])
    let settings: Keybinds[] = []
    for(const keybind in parsed.Root){
    if(keybind == "KeyboardLayout"){
        cache.layout = parsed.Root[keybind]
        if(parsed.Root[keybind].includes('US')){
        //copy defaultUS values to keys.layout, not reference
            for(const [key,val] of defaultUS){
                keys.layout.set(key,defaultUS.get(key)!)
            }
            for(const [key, val] of mouseMap){
                keys.layout.set(key, mouseMap.get(key)!)
            }
        }else{
        console.log("Unknown layout")
        }
        continue
    }
    let category = new Keybinds(keybind)
    //divide into sections and actions
    if(parsed.Root[keybind]["Value"]!=undefined){
        let value = parsed.Root[keybind]["Value"]
        if(Weirdos.has(keybind)){
        category.addAction(new Dropdown(keybind, value))
        } else if(!isNaN(value) && value.toString().indexOf('.') != -1){
        category.addAction(new Slider(keybind,value))
        } else if(!isNaN(value)){
        category.addAction(new Toggle(keybind,value))
        } else {
        category.addAction(new Bind(keybind,"Mouse",value))
        }
    }else{
        for(const subkeybind in parsed.Root[keybind]){
        const value = parsed.Root[keybind][subkeybind]["Value"]
        let subcat = new Keybinds(subkeybind)
        if(value == undefined){
            const device = parsed.Root[keybind][subkeybind]["Device"]
            const key = parsed.Root[keybind][subkeybind]["Key"]
            subcat.addAction(new Bind(subkeybind,device,key))
        }else{
            if(Weirdos.has(keybind)){
            category.addAction(new Dropdown(subkeybind, value))
            } else if(!isNaN(value) && value.toString().indexOf('.') != -1){
            subcat.addAction(new Slider(subkeybind,value))
            } else if(!isNaN(value)){
            subcat.addAction(new Toggle(subkeybind,value))
            } else {
            subcat.addAction(new Bind(subkeybind,"Mouse",value))
            }
        }
        category.addSection(subcat)
        }
    }
    settings.push(category)
    }
    cache.keybinds = settings
}

export function resetKeys() {
    if(cache.layout.includes("US")){
      console.log("US")
      for(const [key,val] of keys.layout){
        val.coord[4] = 0
      }
    }else{
      console.log("Unknown layout")
    }
}

export function loadWorking(){
    var working: Keybinds[] = [];
    var first = Settings[selection.value].controls;
    for (const x in first) {
        for (const y in cache.keybinds) {
            if (first[x] == cache.keybinds[y].name) {
                working.push(cache.keybinds[y])
            }
        }
    }
    return working
}