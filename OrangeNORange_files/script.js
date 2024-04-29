//import ColorThief from "colorthief"; //ALWAYS GO TO script.js AND REMOVE THIS LINE MANUALLY.
const gamePics = document.getElementById('gamePics');
const gamesString = 'Undertale⫻Outcore⫻Oneshot⫻Hat in Time⫻Star Apprentice⫻MC⫻Hollow Knight⫻Paper Mario⫻Stardew Valley⫻Henry Stickmin⫻Danganronpa⫻DDLC⫻Oxenfree⫻vividstasis⫻Stanley Parable⫻Cuphead⫻Celeste';
// window.addEventListener("DOMContentLoaded", () => {
//     const placeholder: HTMLImageElement | null = document.getElementById('image') as HTMLImageElement;
//     console.log(placeholder)
//     placeholder.addEventListener('click', () => {
//         window.location.href="https://undertale.com/"
//         console.log('Ho')
//     })
//     //DOnt delete:
// });
let dataLoaded = false;
let gamesData;
// axios.get('./data/games').then((response) => {
//     gamesData = response.data;
//     console.log(response.data, gamesData); //delete later
//     dataLoaded = true;
// });
gamesData = {"gameNames":["The Henry Stickmin Collection","Oxenfree","Doki Doki Literature Club Plus!","Stardew Valley","A Hat in Time","Celeste","Paper Mario: The Thousand-Year Door","Star Apprentice: Magical Murder Mystery","Danganronpa: Trigger Happy Havoc","OneShot: World Machine Edition","Hollow Knight","Undertale","Vivid/Stasis","Minecraft: Frozen","The Stanley Parable","Outcore: Desktop Adventure","Cuphead"],"gameWebsites":["https://store.steampowered.com/app/1089980","http://nightschoolstudio.com/oxenfree/","https://ddlc.plus/","https://en.wikipedia.org/wiki/Stardew_Valley","http://hatintime.com/","https://store.steampowered.com/app/504230","https://en.wikipedia.org/wiki/Paper_Mario:_The_Thousand-Year_Door","https://store.steampowered.com/app/1632770","https://store.steampowered.com/app/413410","https://www.twitch.tv/directory/game/OneShot:%20World%20Machine%20Edition","https://store.steampowered.com/app/367520","http://undertale.wikia.com/wiki/Undertale","https://twitter.com/hajimeli_id","https://www.minecraft.net/pdp.html?id=8f6b2d03-b0c9-4cd5-94bb-bd95ee04f012","https://store.steampowered.com/app/221910","https://store.steampowered.com/app/1275670","https://en.wikipedia.org/wiki/Cuphead"],"gameArtworks":["//images.igdb.com/igdb/image/upload/t_thumb/aro91.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar6vi.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar9am.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar5l8.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar75x.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar7u5.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar21zk.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arujn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arniy.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar1msn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/tvfbpcmuonwiugjcbc45.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar4vc.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar1xkv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar2dag.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arfj2.jpg","//images.igdb.com/igdb/image/upload/t_thumb/arwbn.jpg","//images.igdb.com/igdb/image/upload/t_thumb/ar6yk.jpg"],"gameCovers":["//images.igdb.com/igdb/image/upload/t_thumb/co2mgv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co2hlq.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co7qyu.jpg","//images.igdb.com/igdb/image/upload/t_thumb/xrpmydnu9rpxvxfjkiu7.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co5pl5.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co3byy.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co25us.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co4213.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1n1w.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co6ldh.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1rgi.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co2855.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co4wy8.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co6ndv.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co1rc9.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co3qpq.jpg","//images.igdb.com/igdb/image/upload/t_thumb/co62ao.jpg"]}
// Ok, so this might suck because the images are low-res. Welp, Guess it was a good learning experience.
// Gonna probably do it manually or something.
const gamesArray = gamesString.split('⫻');
console.log(gamesArray);
function createGame(gamesData) {
    for (let game in gamesData.gameNames) {
        let box = document.createElement('div');
        box.classList.add('game');
        gamePics === null || gamePics === void 0 ? void 0 : gamePics.appendChild(box);
        let image = document.createElement('img');
        image.classList.add('gamePictures');
        box.appendChild(image);
        image.src = gamesData.gameArtworks[game];
        console.log(gamesData.Artworks); //deletre
        let name = document.createElement('p');
        box.appendChild(name);
        name.innerHTML = gamesData.gameNames[game];
        image.addEventListener('click', () => {
            window.location.href = gamesData.gameWebsites[game];
        });
        image.crossOrigin = "Anonymous";
        const colorThief = new ColorThief();
        if (image.complete) {
            let color = colorThief.getColor(image);
            box.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        }
        else {
            image.addEventListener('load', () => {
                let color = colorThief.getColor(image);
                box.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            });
        }
    }
}
setTimeout(() => {
    createGame(gamesData);
}, 200);
export { gamesData };
