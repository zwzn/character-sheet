import { readFileSync } from "fs"
import { join } from "path"

function path(...parts: string[]): string {
    return join(__dirname, '../TheGiddyLimit.github.io/data', ...parts)
}
export function readJSON(...parts: string[]): any {
    return JSON.parse(readFileSync(path(...parts)).toString())
}