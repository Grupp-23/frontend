const SocketClient = {

    gameViewUpdate: null,
    client: null,
    navigate: null,

    setupConnection(navigate) {
        this.client = new WebSocket("ws://localhost:25565");
        this.client.onmessage = this.handleMessage.bind(this);

        this.client.onopen = () => {
            console.log("Connected to Server");

            this.navigate = navigate;

            this.navigate("/matchmake");

            // You can now safely call the send method
            this.sendMessage("hello");
        }
    },

    sendMessage(message) {
        this.client.send(message);
    },

    handleMessage(event) {
        if (event.data === "found") {
            this.navigate("/game");
        }
        else {
            const obj = JSON.parse(event.data);
            this.gameViewUpdate(obj);
        }
    },

    saveUpdate(update) {
        this.gameViewUpdate = update;
    },

    trySpawnCharacter(type) {

    }
}

export default SocketClient;