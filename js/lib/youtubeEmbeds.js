var player;

var gameplayId, trailerId;

import _ from 'underscore'

const onPlayerReady = () => {}

const onPlayerStateChange = state => {
  const PLAYER_PAUSED = state.data == 2
  const PLAYER_ENDED = state.data == 0
  const PLAYER_PLAYING = state.data == 1
  const PLAYER_BUFFERING = state.data == 3

  const element = document.querySelector('#gamevideo-highlights')

  if(PLAYER_PLAYING) {
    document.querySelectorAll('[yv-hide-on-play]').forEach(el => {
        el.style.display = 'none'
    })
    document.querySelectorAll('[yv-show-on-play]').forEach(el => {
        el.style.display = 'inherit'
    })
  } 

  if(PLAYER_PAUSED || PLAYER_ENDED) {
    document.querySelectorAll('[yv-hide-on-play]').forEach(el => {
        el.style.display = 'inherit'
    })
    document.querySelectorAll('[yv-show-on-play]').forEach(el => {
        el.style.display = 'none'
    })
    element.style.display = 'none'
  }
    

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

    addEventListeners()
  
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

  const activateTabByVideoId = id => {
      player.loadVideoById(id)
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

const addEventListeners = () => {
    const classNameActive = 'active'
    const elements = [
        { el: document.querySelector(`[yt-button-action='load:trailer']`), id: trailerId },
        { el: document.querySelector(`[yt-button-action='load:gameplay']`), id: gameplayId }
    ]

    elements.forEach(data => {        
        data.el.addEventListener('click', el => {
            elements.forEach(dataElement => {                
                if(dataElement.el != null)
                    dataElement.el.classList.remove(classNameActive);
            })                        
            
            activateTabByVideoId(data.id)            
            el.target.classList.add(classNameActive)
        });
    });
}
  