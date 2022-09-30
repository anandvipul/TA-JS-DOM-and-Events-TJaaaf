let root = document.querySelector("div.container");
root.addEventListener('mousemove', () => location.reload());


let count = 100;
let flag = true;





setTimeout(() => {
    let timer = document.createElement("h1");
    timer.innerText = count;

    let titleOne = document.createElement('h2');
    titleOne.innerText = "Its Natural & Spontaneous that,";
    
    let titleTwo = document.createElement('h2');
    titleTwo.innerText = "The fittest at time, only survives";

    let titleThree = document.createElement('h2');
    titleThree.innerText = "Who is Next?";

    let embed = document.createElement('embed');
    embed.setAttribute('src', 'music.ogg');
    embed.setAttribute('loop', true);
    embed.setAttribute('autostart', true);
    embed.setAttribute('height', 0);
    embed.setAttribute('width', 0);


    root.append(timer);
    root.append(titleOne);
    root.append(titleTwo);
    root.append(titleThree);
    root.append(embed);

    setInterval(()=> {
        if (flag) {
            count -= 1;
        } else {
            count += 1;
        }
        if (count == 100 || count == -100) {
            flag = !flag;
        }
        timer.innerText = count;
    }, 2000)
}, 2000);



