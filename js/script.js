// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// https://api.twitch.tv/kraken/streams/71852806?client_id=uunztvf1km2sufh91mnk44yhaw6aww&api_version=5
$(document).ready(function() {
var channels = ["OgamingSC2", "ESL_SC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
var urlChannels = 'https://wind-bow.glitch.me/twitch-api/channels/';
var urlStreams = 'https://api.twitch.tv/kraken/streams/';
var newChannels, displayName, id, game, logo, followers, views, url, closed, none, stream_type, all, online, offline, live, liveNow;
channels.forEach(function(c){
  var list = document.createElement('li');
  var test = document.createElement('div')
  var span = document.createElement('span');
  var players = document.getElementById('players');
  var display = players.appendChild(list);
      newChannels = urlChannels + c;
      console.log(newChannels);
console.log(none);
  $.getJSON(newChannels, function(data) {
    displayName = data.display_name;
    id = data._id;
    logo = data.logo;
    followers = data.followers;
    views = data.views;
    url = data.url;
    closed = data.error;
    $(display).append('<img src=' + logo + '>');
    $(display).wrap('<a target="_blank" href=' + url + '></a>')
    $(display).append(displayName);
    $(display).append(span);
    $(display).css('color', 'rgb(255, 236, 0)');
    $('li').last().html('<img src=http://placeskull.com/170/170/000000/30><img src=http://placeskull.com/170/170/000000/30><img src=http://placeskull.com/170/170/000000/30>');
    $('li').last().append('User account does not exist')
    idStreams = urlStreams + id + '?client_id=uunztvf1km2sufh91mnk44yhaw6aww&api_version=5';
    $.getJSON(idStreams, function(data){
            game = data.stream.game
            live = data.stream;
            liveNow = data.stream.stream_type;
            $(test).append('<br>' + 'Game: '+  game + ' ' + 'followers: ' + followers + ' ' + ' ' +  'views: ' + views);
            $(test).css({'color':'rgb(250, 190, 100)', 'font-size': '.8em', 'padding-right':'5px', 'margin-left': '50px','margin-top': '-10px'})
            if(liveNow === 'live') {
              $(span).css({'background': 'darkgreen'});
              $(display).append(test);
              $(list).css('font-size', '20px')
              $(list).addClass('offline');
            }

        });

    });


       //all
            $('#all').click(function(){
              $(list).show()
            });
    //online
            $('#online').click(function(){
              if(!$(list).hasClass('online') ){
                $(list).show();
                if(!$(list).hasClass('offline')){
                  $(list).hide();
                }
              }
            });
    //offline
            $('#offline').click(function(){
              $(list).show()
              if($(list).hasClass('offline')){
                $(list).show();
                if(!$(list).hasClass('online') ){
                  $(list).hide();
                }
              }
            });
  });

});
// > @jawaka72 One of the user stories is to have placeholder images when the user doesn't exist. For the user 'brunofin' I see a broken image and the name "Not Found". Another user story is to show what is currently streaming, and it says "Creative" for OgamingSC2 right now. It should show Starcraft, or their current stream "Take TV Penthouse Party #2 - Day 3"
