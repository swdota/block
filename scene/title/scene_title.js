class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var s = Scene(game)
            game.replaceScene(s)
        })
        game.registerAction('e', function(){
            var s = Editor(game)
            game.replaceScene(s)
        })
        // game.registerAction('e', function(){
        //     var s = SceneTitle.new(game)
        //     game.replaceScene(s)
        // })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 100, 190)
        this.game.context.fillText('按 e 开始编辑', 100, 150)
    }
}
