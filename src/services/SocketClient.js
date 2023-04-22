import { useNavigate } from "react-router-dom";


const SocketClient = {
    // test is just to automatically update the id of the new character
    test: 1,


    spawnCharacter: null,
    client: null,
    navigate: null,

    setupConnection(navigate) {
        this.client = new WebSocket("ws://localhost:25565");
        this.client.onmessage = this.handleMessage.bind(this);

        this.client.onopen = () => {
            console.log("Connected to Server")

            this.navigate = navigate;

            this.navigate("/matchmake");

            // You can now safely call the send method
            this.sendMessage("hello");
        };
    },

    sendMessage(message) {
        this.client.send(message);
    },

    handleMessage(event) {
        console.log(event.data)
    },

    saveSpawnCharacter(spawnCharacter) {
        this.spawnCharacter = spawnCharacter;
    },
    
    trySpawnCharacter(characterType) {
        this.test = this.test + 1;
        this.spawnCharacter(characterType, 0, this.test);
    }
}

export default SocketClient;