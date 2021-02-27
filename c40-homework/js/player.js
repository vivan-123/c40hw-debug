class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.player1score;
        this.player2score;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
        score = this.score;

    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    deleteAllplayer()
    {
        var players = database.ref("players");
        players.remove();
    }

    getScore()
    {
        this.player1score = database.ref("players/player1/score");
        this.player1score.on("value", (data) => {
            this.player1score = data.val();
        });

        this.player2score = database.ref("players/player2/score");
        this.player2score.on("value", (data) => {
            this.player2score = data.val();
        });
    }

    
}
