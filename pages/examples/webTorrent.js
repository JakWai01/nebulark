import React from "react";
import styled from "styled-components";
import WebTorrent from "webtorrent";

const Wrapper = styled.div`
    h1 {
        color: red;
    }
`;

function WebTorrentExample() {

    var client = new WebTorrent()

    var buf = new Buffer('Hello World')
    buf.name = 'Nebulark'
    client.seed(buf, function(torrent) {
        console.log('Client is seeding: ', torrent.magnetURI)
    })


    console.log(WebTorrent.WEBRTC_SUPPORT)
    
    var client = new WebTorrent()

    var torrentId = 'magnet:?xt=urn:btih:e4abfba947f860f8f176d22ac10637589a63d9e5&dn=Nebulark&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'

    client.add(torrentId, function (torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    var file = torrent.files.find(function (file) {
        return file.name.endsWith('')
    })

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
       file.appendTo('body')
    })
    // var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

    // client.add(torrentId, function (torrent) {
    // // Torrents can contain many files. Let's use the .mp4 file
    // var file = torrent.files.find(function (file) {
    //     return file.name.endsWith('.mp4')
    // })

    // // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    // file.appendTo('body')
    // })

    return (
        <Wrapper>
            <body>
                <h1>Hello World</h1>
            </body>
        </Wrapper>
        
    )
}

export default WebTorrentExample;