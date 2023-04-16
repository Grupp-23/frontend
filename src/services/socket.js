const Socket = {
    spawnCharacter: null,
    saveSetCharacters(spawnCharacter) {
        this.spawnCharacter = spawnCharacter;
    },
    
    trySpawnCharacter(characterType) {
        this.spawnCharacter(characterType, 0, "2");
    }
}

export default Socket;