// import { animationHandler, hideDiv } from "./hideDiv";  //animation + toggle
//import { gamesData } from "./script"; Doesn't work.
//console.log(gamesData, "GamesDataTest."); Doesn't work for some reason.
let gamesData;
let gameNames;
let gameCovers;
// axios.get('./data/games').then((response) => {
//     gamesData = response.data;
//     gameNames = gamesData.gameNames;
//     gameCovers = gamesData.gameCovers;
// });
gamesData = {"gameNames":["The Henry Stickmin Collection","Oxenfree","Doki Doki Literature Club Plus!","Stardew Valley","A Hat in Time","Celeste","Paper Mario: The Thousand-Year Door","Star Apprentice: Magical Murder Mystery","Danganronpa: Trigger Happy Havoc","OneShot: World Machine Edition","Hollow Knight","Undertale","Vivid/Stasis","Minecraft: Frozen","The Stanley Parable","Outcore: Desktop Adventure","Cuphead"],"gameWebsites":["https://store.steampowered.com/app/1089980","http://nightschoolstudio.com/oxenfree/","https://ddlc.plus/","https://en.wikipedia.org/wiki/Stardew_Valley","http://hatintime.com/","https://store.steampowered.com/app/504230","https://en.wikipedia.org/wiki/Paper_Mario:_The_Thousand-Year_Door","https://store.steampowered.com/app/1632770","https://store.steampowered.com/app/413410","https://www.twitch.tv/directory/game/OneShot:%20World%20Machine%20Edition","https://store.steampowered.com/app/367520","http://undertale.wikia.com/wiki/Undertale","https://twitter.com/hajimeli_id","https://www.minecraft.net/pdp.html?id=8f6b2d03-b0c9-4cd5-94bb-bd95ee04f012","https://store.steampowered.com/app/221910","https://store.steampowered.com/app/1275670","https://en.wikipedia.org/wiki/Cuphead"],"gameArtworks":["//images.igdb.com/igdb/image/upload/t_thumb/aro91.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar6vi.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar9am.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar5l8.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar75x.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar7u5.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar21zk.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arujn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arniy.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar1msn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/tvfbpcmuonwiugjcbc45.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar4vc.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar1xkv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar2dag.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arfj2.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arwbn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar6yk.jpg"],"gameCovers":["//images.igdb.com/igdb/image/upload/t_thumb/co2mgv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co2hlq.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co7qyu.jpg","//images.igdb.com/igdb/image/upload/t_thumb/xrpmydnu9rpxvxfjkiu7.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co5pl5.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co3byy.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co25us.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co4213.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1n1w.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co6ldh.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1rgi.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co2855.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co4wy8.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co6ndv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1rc9.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co3qpq.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co62ao.jpg"]}
    gameNames = gamesData.gameNames;
    gameCovers = gamesData.gameCovers;
// let gameNames = gamesData.gameNames;
//import axios from "axios"; //ALWAYS DELETE THIS IN DIST FIle.
//I vow to never create anything as messy as this ever again.
let ostList = ["Celeste-First Steps.mp3","Danganronpa-Argument (Break).mp3","Danganronpa-Box 15.mp3","EasterEgg-metal-pipe-falling-sound.mp3","Hollow Knight-City of Tears.mp3","OneShot-Children of the Ruins.mp3","Outcore-Lumi's Essence.mp3","Paper Mario-Rogueport Sewers.mp3","The Stanley Parable-Good Job. You’ve Made It To The Bottom of The Mind Control Facility. Well Done..mp3","Undertale-Enemy Approaching.mp3"];
// axios.get('./data/ost').then((response) => {
//     ostList = response.data;
//     console.log(response.data, ostList); //delete later
// }); // WARNING: Each time you use this, you need to manually add the base path to the Osts folder.
let ostEasterEggs = ['../Osts/EasterEgg-metal-pipe-falling-sound.mp3'];
window.addEventListener("DOMContentLoaded", () => {
    const ost = document.getElementById('audio-html');
    const ostArrows = document.getElementsByClassName('arrowButton-ost');
    let ostName = document.getElementById('ost-name');
    const ostArrowLeft = ostArrows[0];
    const ostArrowRight = ostArrows[2];
    const playButton = document.getElementById('pauseButton'); //me: uses as | also me: >proceeds to do <type>
    let ostTime = document.getElementById('ost-time');
    let ostImage = document.getElementById('songImage');
    //let ostList: string[] = ['../Osts/Children of the Ruins.mp3', '../Osts/Enemy Approaching.mp3', '../Osts/First Steps.mp3']; //dont forget to make backend.
    //let ostImages: string[] = ['https://pbs.twimg.com/profile_images/1610231810201636870/Nj3OUXrQ_400x400.jpg', '../Assets/Images/DeleteLater/Undertale_2022_Poster.png', 'https://assets1.ignimgs.com/2018/01/23/celeste---button-1516746065043.jpg'];
    let currentSongNum = 0;
    let isFirst = true;
    let playing = false; //for pause button, not done yet. comment .
    console.log(ost);
    //ost.play();
    // DONT FORGET TO GET IMAGES VIA API
    function changeOst(arrow) {
        arrow.addEventListener('click', () => {
            //if theres a better way to do this, please tell me.
            playing = true;
            playButton.src = '../Assets/Images/PauseButton/stop_circle_FILL0_wght400_GRAD0_opsz24.svg';
            if (ost && ostName && ostTime) {
                if (arrow.id.includes('right') && !isFirst) {
                    currentSongNum++;
                    if (currentSongNum == ostList.length) {
                        currentSongNum = 0;
                        ostName.innerHTML = 'loading...';
                    }
                }
                else if (!isFirst) {
                    currentSongNum = currentSongNum - 1;
                    if (currentSongNum < 0) {
                        currentSongNum = ostList.length - 1;
                    }
                }
                let gameName = ostList[currentSongNum].split('-').shift(); //Here
                gameNames.findIndex((game) => console.log(game)); // delete
                let coverIndex = gameNames.findIndex((game) => game.includes(gameName));
                isFirst = false;
                ostImage.src = gameCovers[coverIndex];
                ost.src = "../Osts/" + ostList[currentSongNum];
                console.log(currentSongNum); //debug
                ost.play();
                let easterEgg = false;
                let chance = Math.random() * 100;
                if (chance <= 5) {
                    easterEgg = true;
                    ost.src = ostEasterEggs[0];
                    ostImage.src = "../Assets/Images/EasterEggs/MetalPipe.jpg";
                }
                ost.addEventListener('loadedmetadata', () => {
                    ostTime.innerHTML = `${formatTime(ost.currentTime)} // ${formatTime(ost.duration)}`;
                    ost.play();
                });
                ost.addEventListener('timeupdate', () => { ostTime.innerHTML = `${formatTime(ost.currentTime)} // ${formatTime(ost.duration)}`; });
                let songString = ostList[currentSongNum].split("-").pop();
                songString ? ostName.innerHTML = songString : console.log('No song name found.');
                easterEgg ? ostName.innerHTML = "Metal Pipe" : console.log();
                ostTime.innerHTML = `${formatTime(ost.currentTime)} // ${formatTime(ost.duration)}`;
            }
            console.log(currentSongNum); //debug
            ost ? ost.addEventListener('ended', () => {
                currentSongNum++;
                if (currentSongNum >= ostList.length) {
                    currentSongNum = 0;
                }
                ost.src = "../Osts/" + ostList[currentSongNum];
                let gameName = ostList[currentSongNum].split('-').shift();
                let coverIndex = gameNames.findIndex((game) => game.includes(gameName));
                ostImage.src = gameCovers[coverIndex];
                let songString = ostList[currentSongNum].split("-").pop();
                ostName ? songString ? ostName.innerHTML = songString : console.log('No song name found.') : console.log('No song name.');
                ost.play();
            }) : console.log('Song not loaded.');
        });
    }
    function stopPlayButton(button) {
        button.addEventListener('click', () => {
            if (!playing) { //why use !paused? well, I accidentally switched their places, but was too lazy to switch the places of their code.
                //god forgive me
                let ostName = document.getElementById('ost-name');
                button.src = '../Assets/Images/PauseButton/stop_circle_FILL0_wght400_GRAD0_opsz24.svg';
                playing = true;
                let gameName = ostList[currentSongNum].split('-').shift();
                let coverIndex = gameNames.findIndex((game) => game.includes(gameName));
                ostImage.src = gameCovers[coverIndex];
                isFirst ? ost ? ost.src = "../Osts/" + ostList[currentSongNum] : console.log() : console.log();
                //I promise to do better code reusability in my next project, I swear.
                ost === null || ost === void 0 ? void 0 : ost.addEventListener('timeupdate', () => { ostTime.innerHTML = `${formatTime(ost.currentTime)} // ${formatTime(ost.duration)}`; });
                let songString = ostList[currentSongNum].split("-").pop();
                songString ? ostName.innerHTML = songString : console.log('No song name found.');
                ost ? ostTime.innerHTML = `${formatTime(ost.currentTime)} // ${formatTime(ost.duration)}` : console.log('No ost.');
                ost === null || ost === void 0 ? void 0 : ost.play();
                isFirst = false;
            }
            else {
                button.src = '../Assets/Images/PauseButton/play_circle_FILL0_wght400_GRAD0_opsz24.svg';
                playing = false;
                ost === null || ost === void 0 ? void 0 : ost.pause();
            }
            ;
        });
    }
    //This whole file is a fucking mess, I'm very sorry to all my programmer friends.
    changeOst(ostArrowLeft);
    changeOst(ostArrowRight);
    stopPlayButton(playButton);
});
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
//Before you say anything (though you can, I appreciate feedback.):
//I tried just using it as a module, but it always gave me an error.
//One time it gives me some random error and the other it gives me a CORS error.
//Tried fixing it, but this is the fastest way to solve this.
window.addEventListener("DOMContentLoaded", () => {
    //Yeah this probably isn't the best way to do this.
    const ostToggle = document.getElementById('ost-toggle');
    const ostContainer = document.getElementById('ostContainer');
    //forgive me for what I am about to do
    // hideDiv.ts
    function hideDiv(hider, hidden, animation) {
        if (animation) {
            var clicked = false; //if its let, then the variable isn't available in hider clicker.
        }
        hider.addEventListener('click', () => {
            clicked = true;
            hidden.classList.toggle('hidden');
            animation ? animationHandler(animation, hidden, clicked) : console.log('No animation.');
        });
    }
    function animationHandler(animation, object, clicked) {
        object.classList.toggle(animation);
    }
    hideDiv(ostToggle, ostContainer, "leftScreenAnimation");
});
