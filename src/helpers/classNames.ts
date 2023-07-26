type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
    return [
        cls,
        Object.entries(mods)
            .filter(([clas,value])=> Boolean(value))
            .map(([clas])=>clas),
        ...additional]
        .join(' ')
}