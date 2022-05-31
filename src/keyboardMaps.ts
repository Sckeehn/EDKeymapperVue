
import { reactive } from 'vue'
import { Keybinds } from './types';

export interface Key {
    name: string,
    coord: number[]
}
export const selection = reactive({
    value: 0,
    settings: [] as Keybinds[],
  });


export const usNumPad:Map<string, Key> = new Map([
    // ['keyname',{ name: 'keyDisplayName', coord: [Not Used, Gap, Height, Width, State]}]
    ['Key_numlk',{ name: 'num lock', coord: [0, 1, 1, 4, 0]}],
    ['Key_numslash',{ name: '/', coord: [0, 1, 1, 4, 0]}],
    ['Key_numstar',{ name: '*', coord: [0, 1, 1, 4, 0]}],
    ['Key_numhyphen',{ name: '-', coord: [0, 1, 1, 4, 0]}],
    ['Key_num7',{ name: '7', coord: [0, 1, 1, 4, 0]}],
    ['Key_num8',{ name: '8', coord: [0, 1, 1, 4, 0]}],
    ['Key_num9',{ name: '9', coord: [0, 1, 1, 4, 0]}],
    ['Key_numplus',{ name: '+', coord: [0, 1, 2, 4, 0]}],
    ['Key_num4',{ name: '4', coord: [0, 1, 1, 4, 0]}],
    ['Key_num5',{ name: '5', coord: [0, 1, 1, 4, 0]}],
    ['Key_num6',{ name: '6', coord: [0, 1, 1, 4, 0]}],
    ['Key_num1',{ name: '1', coord: [0, 1, 1, 4, 0]}],
    ['Key_num2',{ name: '2', coord: [0, 1, 1, 4, 0]}],
    ['Key_num3',{ name: '3', coord: [0, 1, 1, 4, 0]}],
    ['Key_numEnter',{ name: 'enter', coord: [0, 1, 2, 4, 0]}],
    ['Key_num0',{ name: '0', coord: [0, 0, 0, 9, 0]}],
    ['Key_numDel',{ name: '.', coord: [0, 1, 1, 4, 0]}],
])

export const defaultUS = new Map([
    // ['keyname',{ name: 'keyDisplayName', coord: [Not Used, Gap, Height, Width, State]}]
    ['Key_esc',{ name: 'esc', coord: [1, 6, 1, 4, 0]}],
    ['Key_F1',{ name: 'F1', coord: [1, 1, 1, 4, 0]}],
    ['Key_F2',{ name: 'F2', coord: [1, 1, 1, 4, 0]}],
    ['Key_F3',{ name: 'F3', coord: [1, 1, 1, 4, 0]}],
    ['Key_F4',{ name: 'F4', coord: [1, 3, 1, 4, 0]}],
    ['Key_F5',{ name: 'F5', coord: [1, 1, 1, 4, 0]}],
    ['Key_F6',{ name: 'F6', coord: [1, 1, 1, 4, 0]}],
    ['Key_F7',{ name: 'F7', coord: [1, 1, 1, 4, 0]}],
    ['Key_F8',{ name: 'F8', coord: [1, 3, 1, 4, 0]}],
    ['Key_F9',{ name: 'F9', coord: [1, 1, 1, 4, 0]}],
    ['Key_F10',{ name: 'F10', coord: [1, 1, 1, 4, 0]}],
    ['Key_F11',{ name: 'F11', coord:  [1, 1, 1, 4, 0]}],
    ['Key_F12',{ name: 'F12', coord: [1, 2, 1, 4, 0]}],
    ['Key_prtsc',{ name: 'prt sc', coord: [1, 1, 1, 4, 0]}],
    ['Key_scrlk',{ name: 'scr lk', coord: [1, 1, 1, 4, 0]}],
    ['Key_pause',{ name: 'pause', coord: [1, 1, 1, 4, 0]}],
    ['Key_tilde',{ name: '`', coord: [2, 1, 1, 4, 0]}],
    ['Key_1',{ name: '1', coord: [2, 1, 1, 4, 0]}],
    ['Key_2',{ name: '2', coord: [2, 1, 1, 4, 0]}],
    ['Key_3',{ name: '3', coord: [2, 1, 1, 4, 0]}],
    ['Key_4',{ name: '4', coord: [2, 1, 1, 4, 0]}],
    ['Key_5',{ name: '5', coord: [2, 1, 1, 4, 0]}],
    ['Key_6',{ name: '6', coord: [2, 1, 1, 4, 0]}],
    ['Key_7',{ name: '7', coord: [2, 1, 1, 4, 0]}],
    ['Key_8',{ name: '8', coord: [2, 1, 1, 4, 0]}],
    ['Key_9',{ name: '9', coord: [2, 1, 1, 4, 0]}],
    ['Key_0',{ name: '0', coord: [2, 1, 1, 4, 0]}],
    ['Key_hyphen',{ name: '-', coord: [2, 1, 1, 4, 0]}],
    ['Key_equals',{ name: '=', coord: [2, 1, 1, 4, 0]}],
    ['Key_backspace',{ name: 'backspace', coord: [2, 2, 1, 8, 0]}],
    ['Key_ins',{ name: 'ins', coord: [2, 1, 1, 4, 0]}],
    ['Key_home',{ name: 'home', coord: [2, 1, 1, 4, 0]}],
    ['Key_pageup',{ name: 'page up', coord: [2, 1, 1, 4, 0]}],
    ['Key_tab',{ name: 'tab', coord: [3, 1, 1, 6, 0]}],
    ['Key_Q',{ name: 'q', coord: [3, 1, 1, 4, 0]}],
    ['Key_W',{ name: 'w', coord: [3, 1, 1, 4, 0]}],
    ['Key_E',{ name: 'e', coord: [3, 1, 1, 4, 0]}],
    ['Key_R',{ name: 'r', coord: [3, 1, 1, 4, 0]}],
    ['Key_T',{ name: 't', coord: [3, 1, 1, 4, 0]}],
    ['Key_Y',{ name: 'y', coord: [3, 1, 1, 4, 0]}],
    ['Key_U',{ name: 'u', coord: [3, 1, 1, 4, 0]}],
    ['Key_I',{ name: 'i', coord: [3, 1, 1, 4, 0]}],
    ['Key_O',{ name: 'o', coord: [3, 1, 1, 4, 0]}],
    ['Key_P',{ name: 'p', coord: [3, 1, 1, 4, 0]}],
    ['Key_[',{ name: '[', coord: [3, 1, 1, 4, 0]}],
    ['Key_]',{ name: ']', coord: [3, 1, 1, 4, 0]}],
    ['Key_backslash',{ name: '\\', coord: [3, 2, 1, 6, 0]}],
    ['Key_del',{ name: 'del', coord: [3, 1, 1, 4, 0]}],
    ['Key_end',{ name: 'end', coord: [3, 1, 1, 4, 0]}],
    ['Key_pagedown',{ name: 'page down', coord: [3, 1, 1, 4, 0]}],
    ['Key_caps',{ name: 'caps', coord: [4, 1, 1, 7, 0]}],
    ['Key_A',{ name: 'a', coord: [4, 1, 1, 4, 0]}],
    ['Key_S',{ name: 's', coord: [4, 1, 1, 4, 0]}],
    ['Key_D',{ name: 'd', coord: [4, 1, 1, 4, 0]}],
    ['Key_F',{ name: 'f', coord: [4, 1, 1, 4, 0]}],
    ['Key_G',{ name: 'g', coord: [4, 1, 1, 4, 0]}],
    ['Key_H',{ name: 'h', coord: [4, 1, 1, 4, 0]}],
    ['Key_J',{ name: 'j', coord: [4, 1, 1, 4, 0]}],
    ['Key_K',{ name: 'k', coord: [4, 1, 1, 4, 0]}],
    ['Key_L',{ name: 'l', coord: [4, 1, 1, 4, 0]}],
    ['Key_;',{ name: ';', coord: [4, 1, 1, 4, 0]}],
    ['Key_apostrophe',{ name: '\'', coord: [4, 1, 1, 4, 0]}],
    ['Key_enter',{ name: 'enter', coord: [4, 15, 1, 10, 0]}],
    ['Key_lShift',{ name: 'shift', coord: [5, 1, 1, 10, 0]}],
    ['Key_Z',{ name: 'z', coord: [5, 1, 1, 4, 0]}],
    ['Key_X',{ name: 'x', coord: [5, 1, 1, 4, 0]}],
    ['Key_C',{ name: 'c', coord: [5, 1, 1, 4, 0]}],
    ['Key_V',{ name: 'v', coord: [5, 1, 1, 4, 0]}],
    ['Key_B',{ name: 'b', coord: [5, 1, 1, 4, 0]}],
    ['Key_N',{ name: 'n', coord: [5, 1, 1, 4, 0]}],
    ['Key_M',{ name: 'm', coord: [5, 1, 1, 4, 0]}],
    ['Key_,',{ name: ',', coord: [5, 1, 1, 4, 0]}],
    ['Key_.',{ name: '.', coord: [5, 1, 1, 4, 0]}],
    ['Key_/',{ name: '/', coord: [5, 1, 1, 4, 0]}],
    ['Key_rShift',{ name: 'shift', coord: [5, 7, 1, 12, 0]}],
    ['Key_upArrow',{ name: '^', coord: [5, 6, 1, 4, 0]}],
    ['Key_lCtrl',{ name: 'ctrl', coord: [6, 1, 1, 5, 0]}],
    ['Key_lWin',{ name: 'Win', coord: [6, 1, 1, 5, 0]}],
    ['Key_lAlt',{ name: 'alt', coord: [6, 1, 1, 5, 0]}],
    ['Key_space',{ name: 'space', coord: [6, 1, 1, 25, 0]}],
    ['Key_rAlt',{ name: 'alt', coord: [6, 1, 1, 5, 0]}],
    ['Key_fn',{ name: 'fn', coord: [6, 1, 1, 5, 0]}],
    ['Key_rWin',{ name: 'Win', coord: [6, 1, 1, 5, 0]}],
    ['Key_rCtrl',{ name: 'ctrl', coord: [6, 8, 1, 5, 0]}],
    ['Key_leftArrow',{ name: '<', coord: [6, 1, 1, 4, 0]}],
    ['Key_downArrow',{ name: '⌄', coord: [6, 1, 1, 4, 0]}],
    ['Key_rightArrow',{ name: '>', coord: [6, 1, 1, 4, 0]}],
])
export const mouseMap = new Map([
    ['left_Click', { name:'left click', coord: [0, 0, 0, 0, 0]}],
    ['right_Click', { name:'right click', coord: [0, 0, 0, 0, 0]}],
    ['mouse4', { name:'Mouse 4', coord: [0, 0, 0, 0, 0]}],
    ['mouse5', { name:'Mouse 5', coord: [0, 0, 0, 0, 0]}],
    ['scrollUp', { name:'Scroll Up', coord: [0, 0, 0, 0, 0]}],
    ['scrollDown', { name:'scrollDown', coord: [0, 0, 0, 0, 0]}],
    ['middleClick', { name:'middleClick', coord: [0, 0, 0, 0, 0]}],

])

export const keys = reactive({
    layout: new Map<string,Key>()
})

export const currentKeys:Map<string, string> = new Map([

    
])