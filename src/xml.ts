import { XMLParser } from 'fast-xml-parser'

export function getKeybinds (file:string) {
    const option = {
        ignoreAttributes: false,
        attributeNamePrefix: '',
    }
    const parser = new XMLParser (option)
    const output = parser.parse(file)
    return output
}