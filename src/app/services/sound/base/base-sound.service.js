export class BaseSoundService {

    sounds = [];
    nextSound = 0;
    totalSounds = 0;

    constructor(path, bufferSize = 8) {
        const { sounds } = this;

        for (let i = 0; i < bufferSize; ++i) {
            sounds.push(new Audio(path));
        }

        this.totalSounds = bufferSize;
    }

    play(volume = 1) {
        const { sounds, nextSound, totalSounds } = this;

        const sound = sounds[nextSound];

        if (totalSounds && sound.paused) {
            sound.volume = volume;
            sound.play();

            this.nextSound = (nextSound + 1) % totalSounds;
        }
    }

}
