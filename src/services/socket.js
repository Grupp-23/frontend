const Socket = {
    spawnCharacter: null,
    saveSetCharacters(spawnCharacter) {
        this.spawnCharacter = spawnCharacter;
    },
    
    trySpawnCharacter(characterType) {
        this.spawnCharacter(characterType);
    }
}

export default Socket;