let spotifyApi;

(function(){
    const token = "BQDQU7uyfDft66q-6_ulVw9TU0d_jzaC89XFuSAU0mENFvTZF4VhDlCN4SPydG8n-3wU5KOchebpxp7MnO4Z5rAF5SbC4Cif-sRW5grYsJa4jo7wfR0Rda7bZ3Sy4cBFoYZrV1WM6ehOJ7Up";
    const headers = { Authorization: 'Bearer ' + token }

    function call (url,token,handleSuccess,handleError){// generic function with arguments that we invoke inside each method

        fetch(url,{headers})

        .then(res => {
            
            if (res.status === 200)
                return res.json()
            
            throw new Error('connection error')
        })
        .then(handleSuccess)
        .catch(handleError)
    }

// Here we define the object with 4 methods, one for each ajax call
    spotifyApi = {
        
        searchArtists: function(query,handleArtists,handleError){
            call(
                "https://api.spotify.com/v1/search?q="+query+"&type=artist",
                this.token,
                data => handleArtists(data.artists.items),
                handleError
            );
        },

        getAlbumsByArtistId: function(idArtist,handleAlbums,handleError){
            call(
                "https://api.spotify.com/v1/artists/"+idArtist+"/albums",
                this.token,
                data => handleAlbums(data.items),
                handleError
            );
        },

        getTracksByAlbumId: function(idAlbum,handleTracks,handleError){
            call(
                "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",
                this.token,
                data => handleTracks(data.items),
                handleError
            );
        },

        getTrackById: function(idTrack,handleTrack,handleError){
            call(
                "https://api.spotify.com/v1/tracks/"+idTrack,
                this.token,
                handleTrack,
                handleError
            );
        }
    }
})()