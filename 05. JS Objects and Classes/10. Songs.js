class Song {
    constructor(type, name, length) {
        this.type = type
        this.name = name
        this.length = length
    }
}


function solve (input) {
    const typeToDisplay = input.pop()
    const [_, ...songs] = input

    const result = songs
    .map( (songAsText) =>{
        const [type, name, length] = songAsText.split('_')
        const song = new Song(type, name, length)

        return song
    }).filter((song) => song.type === typeToDisplay)
    .map((song) => song.name)
    .join('\n')

    console.log(result)
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])