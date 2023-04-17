const Socket = {
    spawnCharacter: null,
    // test is just to automatically update the id of the new character
    test: 1,
    saveSpawnCharacter(spawnCharacter) {
        this.spawnCharacter = spawnCharacter;
    },
    
    trySpawnCharacter(characterType) {
        this.test = this.test + 1;
        this.spawnCharacter(characterType, 0, this.test);
    }
}

export default Socket;