class Album {
    label: Album.Label
}


namespace Album {
    export class Label { }
}


function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix
}

namespace buildLabel {
    export const suffix = ''
    export const prefix = 'Hello, '
}