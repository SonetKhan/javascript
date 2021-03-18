function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
   
    e = e || window.event;
    if (e.keyCode == 13)
    {
        
       document.getElementById('search-field').click();
       
        
        return false;
    }
    
    return true;
}
const searchSong = () => {
    const searchText = document.getElementById('search-field').value;
    const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
    toggleSpinner();
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data.data);
            displaySongs(data.data);
        })
}
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <audio controls>
        <source src="${song.preview}" type="audio/ogg">
        </audio>
        <div class="col-md-3 text-md-right text-center">
            <button onclick = "getLyric('${song.title}','${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
        </div>`;
        
        songContainer.appendChild(songDiv);

    });
    toggleSpinner();
}
const getLyric = (title,artist)=>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        displayLyrics(data.lyrics);
    })

}
const displayLyrics = lyrics=>{
    console.log(lyrics);
    const songLyrics = document.getElementById('song-lyrics');

    songLyrics.innerText = lyrics;
}
    const toggleSpinner=()=>{
        const loadingSpinner = document.getElementById('loading-spinner');
        const songs = document.getElementById('song-container');
        loadingSpinner.classList.toggle('d-none');
        songs.classList.toggle('d-none');
       
 
    }