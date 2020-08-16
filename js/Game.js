class Game {
	constructor(){
	}

	getState(){
		var gameStateRef  = database.ref('gameState');
		gameStateRef.on("value",function(data){
			gameState = data.val();
		})
	}

	update(state){
		database.ref('/').update({
			gameState: state
		});
	}

	async start(){
		if(gameState === 0){
			player = new Player();
			var playerCountRef = await database.ref('playerCount').once("value");
			if(playerCountRef.exists()){
				playerCount = playerCountRef.val();
				player.getCount();
			}
			form = new Form();
			form.display();
		}

		//player1 = createSprite(100,200,50,50);
		//player2 = createSprite(200,200,50,50);
		//player3 = createSprite(300,200,50,50);
		//player4 = createSprite(400,200,50,50);
	}

	play(){
		form.hide();
		drawSprites();
		var counter = 100;
		var y_pos = 20;
		var rowGroup = new Group();
		/*while(y_pos <= 400){
			for(var i_pos = 20; i_pos < 400; i_pos += 40){
				var oneBlock = createSprite(i_pos, y_pos, 40, 40)
				//rgb(0-255, 0-255, 0-255)
				oneBlock.shapeColor = rgb(Math.round(random(150.255)), Math.round(random(120,255)), Math.round(random(200,255)));
				rowGroup.add(oneBlock);
			}
			fill("black");
		    for(var i_pos_c = 20; i_pos_c < 400; i_pos_c += 40){
		    	text(counter--,i_pos_c,y_pos)
		    }
			y_pos += 40;
		}*/
		var columns = 10;
		var rows = 10;
		var resolution = 40;
		var direction = 1;
		var x = 0;
		var y = 360;
		for( var i = 0; i < columns*rows; i = i+1){
			var tile = new Tile(x,y,resolution,i,i+1);
			tiles.push(tile);
			x = x + (resolution*direction);

			if(x >= width){
				x = x-40;
				y = y-40;
				direction = direction-1;
			}

			if(x < 0){
				x = 40;
				y = y-40;
				direction = direction-1;
			}
		}

		for(var tile of tiles){
			tile.show();
		}
	}
}