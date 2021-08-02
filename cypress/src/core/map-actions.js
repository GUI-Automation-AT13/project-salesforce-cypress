export function iterateSetToRunMap(map, set) {
    set.forEach((value) => {
        if (map.has(value)) {
            map.get(value)()
        }
    })
}
