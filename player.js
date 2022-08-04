$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://hos.hostkachete.com:9059/index.html%3Fsid%3D1';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://hos.hostkachete.com:9059/index.html%3Fsid%3D1'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-stop fa-lg beat');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://hos.hostkachete.com:9059/index.html%3Fsid%3D1');
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });

    

    



    
});