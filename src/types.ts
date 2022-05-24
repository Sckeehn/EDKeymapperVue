import { reactive } from 'vue'

export const store = reactive({
    count: 0,
    increment() {
        this.count++
    }
})

export const state = reactive({
    current: 'home',
})

export const cache = reactive({
    keybinds: [],
    layout: ""
})

const SliderMap:Map<string,number[]> = new Map([
    ['MouseSensitivity',[.1,10]],
    ['MouseDecayRate',[1,10]],
    ['MouseDeadzone',[0, .2]],
    ['MouseLinearity',[1,3]],
    ['YawToRollSensitivity',[.1, .9]],
    ['MouseHeadlookSensitivity',[.1,10]],
    ['Deadzone',[0,1]],
    ['HeadlookSensitivity',[.25,4]],
    ['HeadlookMotionSensitivity',[.1, .9]],
    ['BuggyTurretMouseSensitivity',[.1,10]],
    ['BuggyTurretMouseDeadzone',[0, .2]],
    ['BuggyTurretMouseLinearity',[1,3]],
    ['MultiCrewThirdPersonMouseSensitivity',[.1,10]],
    ['FreeCamMouseSensitivity',[.1,10]],
    ['FSSMouseSensitivity',[.1,10]],
    ['FSSMouseDeadzone',[0, .2]],
    ['FSSMouseLinearity',[1,3]],
    ['SAAThirdPersonMouseSensitivity',[.1,10]],
])

export class Keybinds{
    name:string=""
    action: Action[] = []
    section: Keybinds[] = []
    constructor(name: string){
        this.name = name
    }
    addAction(action: Action){
        this.action.push(action)
    }
    addSection(section: Keybinds){
        this.section.push(section)
    }
}

export class Action{
    name:string=""
    val:string=""
    constructor(name: string, val: string){
        this.name = name
        this.val = val
    }
    getType(){
        return "None"
    }
    getName(){
        return this.name
    }
    getValue(){
        return this.val
    }
    evaluate(input:string){
        return "None"
    }
    min(){
        return -1
    }
    max(){
        return 1
    }
}

export class Toggle extends Action{
    constructor(name: string, val: string){
        super(name, val)
    }
    getType(){
        return "Toggle"
    }
    evaluate(input:string){
        return this.val
    }
}
export class Slider extends Action{
    constructor(name: string, val: string){
        super(name, val)
    }
    getType(){
        return "Slider"
    }
    evaluate(input:string){
        return this.val
    }
    min(){
        const value = SliderMap.get(this.name)
        if(SliderMap.has(this.name) && value != undefined){
            return value[0]
        }
        return 0
    }
    max(){
        const value = SliderMap.get(this.name)
        if(SliderMap.has(this.name) && value != undefined){
            return value[1]
        }
        return 0
    }
}
export class Bind extends Action{
    constructor(name: string, val: string){
        super(name, val)
    }
    getType(){
        return "Bind"
    }
    evaluate(input:string){
        return this.val
    }
}
export class Dropdown extends Action{
    constructor(name: string, val: string){
        super(name, val)
    }
    getType(){
        return "Dropdown"
    }
    evaluate(input:string){
        return this.val
    }
}