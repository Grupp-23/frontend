/**
 * Represents the Socket Client, handles outgoing and incoming messages. Also saves the connection to the server.
 * @constructor
 */

const SocketClient = {
    gameViewUpdate: null,
    client: null,
    navigate: null,

    /**
     * Establishes the connection to the server and saves is as client.
     * @param {function} navigate - The navigation function to navigate to other paths on the website.
     */
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

    /**
     * Sends a message to the server.
     * @param {string} message - The message to send.
     */
    sendMessage(message) {
        this.client.send(message);
    },

    /**
     * Runs when a message has been collected.
     * @param {object} event - The event object.
     */
    handleMessage(event) {
        if (event.data === "found") {
            this.navigate("/game");
        }
        else {
            const obj = JSON.parse(event.data);
            this.gameViewUpdate(obj);
        }
    },

    /**
     * Saves the update function from GameView.
     * @param {function} update - The update function.
     */
    saveUpdate(update) {
        this.gameViewUpdate = update;
    }
}

export default SocketClient;