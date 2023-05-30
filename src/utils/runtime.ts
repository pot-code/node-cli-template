import { dirname } from 'path'
import { fileURLToPath } from 'url'

export function getDirname(metaURL: string) {
  return dirname(fileURLToPath(metaURL))
}
