
export function parseBool(
  str: string
) : boolean {
  str = str.toLowerCase()
  if (str === 'true') return true
  if (str === 'false') return false
  throw new Error('Could not parse boolean.')
}

