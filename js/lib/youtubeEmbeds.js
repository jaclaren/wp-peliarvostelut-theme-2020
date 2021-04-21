var player;

var gameplayId, trailerId;

const onPlayerReady = () => {}

const onPlayerStateChange = state => {
  const PLAYER_PAUSED = 2
  const PLAYER_ENDED = 0
  const PLAYER_PLAYING = 1

}

const extractIdFromYoutubeEmbed = url => {
    const regEx = /embed\/(.*?)/g
    const index = regEx.exec(url).index
    return url.substr(index, url.length).replace('embed\/', '')
  }


window.onYouTubeIframeAPIReady = function() {    
    document.querySelectorAll("[data-coltype='youtube-embed']").forEach(el => {
      gameplayId = extractIdFromYoutubeEmbed(el.getAttribute('data-gameplay-url'))
      trailerId = extractIdFromYoutubeEmbed(el.getAttribute('data-trailer-url'))
    })
  
    player = new window.YT.Player(document.querySelector(`[data-coltype='youtube-embed']`), {
            height: '390',
            width: '640',
            videoId: trailerId,
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          })    
  }
  
  document.querySelectorAll('#video-toggler').forEach(e => {  
    e.innerHTML = 'Pelivideo'
    
    e.addEventListener('click', elem => {
      const currentVideoId = player.getVideoData()['video_id']
      const currentIsTrailer = currentVideoId == gameplayId 

      player.loadVideoById(currentIsTrailer ? trailerId : gameplayId)    
      e.innerHTML = currentIsTrailer ? 'Pelivideo' : 'Traileri'
    })
  })
  