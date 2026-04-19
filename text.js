// text.js - Load data from conf-pub.json
function constructAcad() {
    let title = ""
    let desc = ""
    let pubType = ""
    // Fetch the JSON file and return its processed content
    return fetch('./conf-pub.json')
        .then(response => response.json())
        .then(confData => {
            let text = `<h4 style="margin-top: 0px">Conference Publications</h4>
            <ul>`;
            
            for (let i = 0; i < confData.length; i++) {
                if (confData[i].doi) {
                    title = `<a href=${confData[i].doi} target="_blank">
                    <span class="pub-title">
                    ${confData[i].title}
                    </span>
                    </a>`;
                } else {
                    title = `<span class="pub-title">
                    ${confData[i].title}
                    </span>`;
                }

                desc = `<span class="pub-desc">${confData[i].author} (${confData[i].year})</em>`
                
                if (confData[i].pubtype === "poster") {
                    pubType = `<span class="pub-conf-poster">poster</span>`
                } else if (confData[i].pubtype === "panel") {
                    pubType = `<span class="pub-conf-panel">panel</span>`
                } else if (confData[i].pubtype === "workshop") {
                    pubType = `<span class="pub-conf-workshop">workshop</span>`
                } else if (confData[i].pubtype === "lecture") {
                    pubType = `<span class="pub-conf-lecture">lecture</span>`
                } else {
                    pubType = ""
                }

                text += ("<li>" + title + "<br>" + pubType + desc + "</li>")
            }
            
            text += "</ul>";
            // console.log("Acad");
            return text;
        });
}

function constructService() {
    // console.log("Service");
    let text = `<div style="font-size: 15px">
    <strong style="text-decoration: underline">Academic</strong><br>
    <strong>Human Factors & Ergonomics Society Student Chapter</strong> <br>
    <span style="font-size:13px"> University of Wisconsin–Madison, Madison, WI</span>
    <p>I am active in our student chapter! Let me know if you have any questions about activities in our campus.</p> 
    <br>
    <strong>Human Factors Cast</strong> <br>
    <span style="font-size:13px"></span>
    <p><a href="https://www.humanfactorscast.media/", target="_blank">Listen to Human Factors Cast!</a>
    I occasionally contribute to the production content.
    You'll see me running around during the HFES Conference interviewing people and promoting our booth!
    Say hi if you happen to see us :)
    If you have any burning thoughts that you would like to share and would love to discuss it in the podcast, let us know!</p>
    <br>
    <div style="border:0.5px solid rgb(122, 167, 120); width: 200px; border-radius:25%"></div>
    <br>
    <strong style="text-decoration: underline">Personal</strong><br>
    <strong>Madison Mech Mania</strong><br>
    <span style="font-size:13px">Madison, WI</span>
    <p>If you are interested in meeting mechanical keyboard enthusiasts in Madison, WI, don't hesitate to contact me!
    Me and my friends occasionally run informal meetups whenever possible, and am always excited to talk about the hobby.
    We managed to hold an official meetup back in 2023.
     <a href="https://hoffmanmyster.com/mad-23-07" target="_blank">Click here for more cool photos</a> that one of our attendees took. (thanks a lot, Andrew!)</p>
    </div>
     `
    
    return text;
}

function constructPersonal() {
    // console.log("Personal");
    let text = `
    <div style="font-size: 15px">
    <strong>I build mechanical keyboards and I am a 40% user!</strong> <br>
    <p>I really enjoy figuring out what is the best and optimal layout for my daily use.
    My daily driver is currently a Corne Zen-ish v3 with lowprokb's Sunset Tactile (40gf), and KLP Lame (Saddled) keycaps.
    <br><br>
    <img src="./assets/photos/cornesunset.png" id="corne-img" alt="A photo of a split mechanical keyboard."></p>
    <br>
    <br>
    <strong>Graphic design is my <em>passion</em>.</strong>
    <p>I do graphic design for fun. Most of my visual communication works are posted in the 
    UW-Madison's HFES Student Chapter <a href="https://www.instagram.com/hfes_uw">Instagram</a>.
    This personal website is actually me integrating my graphic design knowledge with my newly acquired HTML/CSS skill :)
    I'm really looking forward to update and improve this website as my web design knowledge gets better!
    At this point, I only know how to do HTML, CSS, and a very basic understanding of JavaScript.
    I am trying to pick up React.js, D3.js, CSS animation now!</p>
    <br><br>
        <img src="./assets/art/polaris.png" id="polaris-img" alt="An illustration of a polar bear in an astronaut suit flying in space.">
    </div>
    ` 

    return text;
}

export function constructText(value) {
    switch (value) {
        case "academia": 
            return constructAcad();
        case "service": 
            return constructService();
        case "personal": 
            return constructPersonal();
        default: 
            return "Error!";
    }
}
