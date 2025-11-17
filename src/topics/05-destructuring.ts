interface AudioPlayer {
    audioVolume: number
    soundDiration: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soundDiration: 36,
    song: 'Test',
    details: {
        author: 'Author Test',
        year: 2000
    }
}

// se desestructura la propiedad de un objeto en una variable independiente
const { song: anotherSong } = audioPlayer

// al desestructurarse la propiedad, se puede referenciar la nueva variable con un nombre distinto al de la propiedad
console.log(anotherSong)

// desestructuracion de una propiedad que se encuentra en un objeto dentro de otro objetso
const {author} = audioPlayer.details
console.log(author)
