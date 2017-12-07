var videoSwitcher = {
  video1: $('.videofront'),
  video2: $('.videoback'),
  switch: function(front, back){
    back.css('z-index', '10');
    front.css('z-index', '100');
  },
  keyDown: function(){
    document.body.onkeydown = function(e){
      if(e.keyCode == 32){
        this.switch(this.video2, this.video1);
      }
    }.bind(this);
  },
  keyUp: function(){
    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        this.switch(this.video1, this.video2);
      }
    }.bind(this);
  },
  init: function(){
    this.keyDown();
    this.keyUp();
  }
};

videoSwitcher.init();

/*document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        $('.videoback').css('z-index', '10');
        $('.videofront').css('z-index', '100');
    }
};

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        $('.videoback').css('z-index', '100');
        $('.videofront').css('z-index', '10');
    }
};*/
