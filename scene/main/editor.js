var Editor = function(game) {
    var s = {
        game: game,
    }
    game.registerAction('Enter', function(){
        var s = Scene(game)
        game.replaceScene(s)
    })

    s.draw = function() {
        // draw 背景
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)
        game.context.fillText('按 Enter 开始游戏', 10, 280)

        var blocks = loadLevel(game)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
    }
    s.update = function() {

    }

    // mouse event
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        var areyy = []
        areyy.push(x)
        areyy.push(y)
        levels.push(areyy)
    })

    return s
}
