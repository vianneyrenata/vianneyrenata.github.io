
// ---- try-the-flow player ----
const STEPS=[
 ['01-splash.png','Splash','One target, nothing competing for attention. The pod opens.'],
 ['02-keyin.png','Who are you?','Two fields you already know by heart. No password to invent, nothing to remember later: the programme is the account.'],
 ['03-confirm.png','Is this you?','Recognition instead of recall: your entry is shown, you only judge it. One button, one decision. Affiliation is asked because 23 Chens and 21 Kims share a name.'],
 ['04-ask-hobby.png','Anything non-academic?','Its own step, on purpose. Asked once you are in, with a skip that costs nothing. See the principle cards for why this moved.'],
 ['05-ask-bio.png','Happy with your bio?','A separate yes/no, not a form. Most people say yes; the few who want to edit get the editor, nobody else sees it.'],
 ['06-home.png','Your matches','The goal state: your dot, your closest people, your sessions. Everything after this is optional.'],
];
let i=0; const frame=document.getElementById('frame'), ol=document.getElementById('steps'), note=document.getElementById('stepnote');
ol.innerHTML=STEPS.map((s,k)=>`<li data-k="${k}">${s[1]}</li>`).join('');
function go(k){ i=(k+STEPS.length)%STEPS.length; frame.style.opacity=0; setTimeout(()=>{frame.src='assets/'+STEPS[i][0]; frame.style.opacity=1;},120);
  [...ol.children].forEach((li,n)=>li.classList.toggle('on',n===i)); note.textContent=STEPS[i][2]; }
ol.addEventListener('click',e=>{const li=e.target.closest('li'); if(li) go(+li.dataset.k);});
document.getElementById('prev').onclick=()=>go(i-1); document.getElementById('next').onclick=()=>go(i+1);
document.addEventListener('keydown',e=>{ if(e.key==='ArrowRight') go(i+1); if(e.key==='ArrowLeft') go(i-1); });
go(0);

// ---- principle cards ----
const CARDS=[
 ['Fewest steps to the goal','Onboarding is a cost paid before any benefit, so every step has to earn its place. Name, affiliation, one confirmation, map. Three taps, and the map is the reward that makes the next optional step worth answering.',[["02-keyin.png", "1. Name and affiliation."], ["03-confirm.png", "2. \"Yes, that\'s me.\""], ["06-home.png", "3. The map. Required part over."]]],
 ['One decision per screen','Attention is the scarce resource. The first version asked people to confirm who they were, check their bio and add hobbies on one screen. Everyone did the first, skimmed the second and ignored the third: the empty hobby field was just one more thing on a busy page. Splitting them into separate screens, each with one question, is what made the hobby field get used.',[["03-confirm.png", "Confirm. Nothing else on the screen."], ["04-ask-hobby.png", "Then: hobbies, on their own."], ["05-ask-bio.png", "Then: the bio, on its own."], ["06-home.png", "Then the map."]]],
 ['Nudge, then get out of the way','The hobby question comes right after the claim, when people are warm and the next screen is the reward. It is a single textarea with a visible Skip, so answering is cheap and declining is cheaper. The app never asks again on its own.',[["04-ask-hobby.png", "Asked once, right after the claim."], ["06-home.png", "Skip, and you are on the map; the app does not ask again."], ["23-hobby-gate.png", "Only if you open the Hobby view yourself does it ask once more."], ["12-hobby-cloud.png", "Add yours, and the cloud opens."]]],
 ['Recognition over recall','Nobody types a bio from memory at a registration desk. Returning attendees see their programme entry and judge it; newcomers get a drafted starting point to react to when one can be found. Editing a paragraph is far less load than producing one.',[["17-drafting.png", "A newcomer types a name; the app searches first."], ["18-draft-landed.png", "A draft lands in the box, to edit, not to accept."], ["19-placing.png", "Build it, and placement takes three seconds."], ["06-home.png", "On the map with real matches."]]],
 ['Make the common path the easy path','When a name search is unsure, the app leans toward suggesting a match. A wrong suggestion costs one tap to dismiss; a missed one creates a duplicate profile that lives forever. Error cost is asymmetric, so the design is too.',[["02-keyin.png", "A name typed slightly wrong."], ["27-typo.png", "Close matches offered, with \"that\'s not me\" as the way out."], ["03-confirm.png", "One tap later: the right entry."]]],
 ['Reciprocity as the incentive','The Hobby view opens only after you have added your own hobbies. People accept give-to-get readily, and it is the one nudge that fills the field reliably without nagging.',[["23-hobby-gate.png", "Open the Hobby view without hobbies: the gate."], ["12-hobby-cloud.png", "Add yours, and everyone\'s appear."], ["13-hobby-tap.png", "Tap a hobby to see who shares it."]]],
 ['Show system status, always','Waiting with no feedback feels like failure. The form locks with a reason while the list downloads, placement shows progress for its three seconds, a banner says when a newer map exists, and a failure screen says exactly what to do and whom to email.',[["21-keyin-loading.png", "List still downloading: the form says so and waits."], ["19-placing.png", "Placement in progress, with motion."], ["20-placing-failed.png", "If it fails: what happened, what to do, whom to email."], ["22-stale-sync.png", "Later: an unsent edit is flagged, and a newer map is offered."]]],
 ['Signal, not certainty','A small circle after a name means this person opened the app and claimed their entry, so they are likely in the building. The FAQ says "highly likely", never "verified": the cue should be trusted exactly as much as it deserves.',[["06-home.png", "A circle after some names in the list."], ["08-person-card.png", "The same circle on the card."], ["10-faq.png", "The FAQ explains it: \"highly likely\", not \"verified\"."]]],
 ['Fade, do not remove','Sessions that have ended or been cancelled grey out and sink. Removing them would break the mental model people built of their saved list; fading keeps the map of the day stable while still showing what is still live.',[["16-past-sessions.png", "Ended sessions fade and sink in the programme list."], ["11-saved-programs.png", "They stay in your saved list, faded, never deleted."]]],
 ['Point people at the room','There is no in-app messaging. The app answers "who should I look for?" and stops. A chat would pull attention back to the phone, which is the opposite of the goal.',[["08-person-card.png", "Find a person: their bio, and their session."], ["09-program-card.png", "Open the session, save it to your schedule."], ["11-saved-programs.png", "Your schedule: where to go to meet them."], ["10-faq.png", "The FAQ says the rest: go talk to them."]]],
 ['Count events, not people','Usage is counted per minute per event name, never per person. There is no unique-visitor number on purpose, because that would need an identifier, and a conference app should not be the thing that tracks you.',[["24-me-popup.png", "Your own popup: a dark-mode switch, no account settings, because there is no account."]]],
];
document.getElementById('cards').innerHTML=CARDS.map((c,k)=>`<div class="card" data-k="${k}"><div class="hd"><h3>${c[0]}</h3><p class="why">${c[1]}</p><div class="more">Click to see the screen${c[2].length>1?'s':''} ▾</div></div><div class="shot"><div class="car"><button class="arr prev" aria-label="Previous">‹</button><img src="assets/${c[2][0][0]}" alt="" loading="lazy"><button class="arr next" aria-label="Next">›</button></div><div class="more cap">${c[2][0][1]}</div><div class="dots">${c[2].map((_,n)=>`<i${n?'':' class="on"'}></i>`).join('')}</div></div></div>`).join('');
document.querySelectorAll('.card').forEach(c=>{
  const shots=CARDS[+c.dataset.k][2]; let n=0; const img=c.querySelector('.car img'), cap=c.querySelector('.cap'), dots=c.querySelectorAll('.dots i');
  const setn=d=>{ n=(n+d+shots.length)%shots.length; img.src='assets/'+shots[n][0]; cap.textContent=shots[n][1]; dots.forEach((x,i)=>x.classList.toggle('on',i===n)); };
  if(shots.length<2) c.querySelectorAll('.arr,.dots').forEach(x=>x.style.display='none');
  c.querySelector('.prev').addEventListener('click',e=>{e.stopPropagation(); setn(-1);}); c.querySelector('.next').addEventListener('click',e=>{e.stopPropagation(); setn(1);});
  c.querySelector('.shot').addEventListener('click',e=>e.stopPropagation());
  c.querySelector('.hd').addEventListener('click',()=>{ c.classList.toggle('open'); c.querySelector('.hd .more').textContent=c.classList.contains('open')?'Click to close ▴':`Click to see the screen${shots.length>1?'s':''} ▾`; });
});
// ---- compare sliders ----
document.querySelectorAll('.cmp').forEach(f=>{
  f.innerHTML=`<img src="${f.dataset.b}" alt=""><img class="top" src="${f.dataset.a}" alt=""><div class="handle"></div><span class="lab la">${f.dataset.la}</span><span class="lab lb">${f.dataset.lb}</span>`;
  const set=x=>{const r=f.getBoundingClientRect(); const p=Math.min(1,Math.max(0,(x-r.left)/r.width)); f.style.setProperty('--cut',`${(1-p)*100}%`);};
  let down=false; f.addEventListener('pointerdown',e=>{down=true; set(e.clientX); f.setPointerCapture(e.pointerId);}); f.addEventListener('pointermove',e=>{ if(down) set(e.clientX); }); f.addEventListener('pointerup',()=>down=false); f.addEventListener('pointercancel',()=>down=false);
});

// ---- film strip + lightbox ----
const FILM=[['21-keyin-loading.png','Form locked until the attendee list has downloaded'],['17-drafting.png','Searching the web for a new signup\'s bio'],['18-draft-landed.png','The draft lands in an editable box'],['19-placing.png','"Teleporting you in…": ~3 s'],['22-stale-sync.png','Unsent edit, and a newer map offered'],['31-sunset.png','The closing notice, shown on every open in the last days'],['09-program-card.png','A session card, save or open'],['11-saved-programs.png','Saved sessions by day; ended ones fade'],['14-student-view.png','Student view: students only, purple'],['15-view-picker.png','The view picker'],['13-hobby-tap.png','Tap a hobby to see who\'s into it'],['07-home-zoom.png','The map at 300 %'],['26-person-card-dark.png','A card in dark mode']];
document.getElementById('film').innerHTML=FILM.map(f=>`<figure><img src="assets/${f[0]}" alt="" loading="lazy"><figcaption>${f[1]}</figcaption></figure>`).join('');
const lb=document.getElementById('lightbox'); document.querySelectorAll('.film img, .card .shot img, .phone img').forEach(im=>im.addEventListener('click',e=>{ e.stopPropagation(); lb.querySelector('img').src=im.src; lb.classList.add('on'); }));
lb.addEventListener('click',()=>lb.classList.remove('on'));


// ---- features ----
const FEATURES={
 academic:{intro:'The default. Built from everyone\'s research paragraph.',items:[
  ['Attendee interest map','Every attendee is a dot; nearby dots work on similar things. Pinch, scroll or tap to zoom; you are the dark one.'],
  ['Top matches for you','The people whose work is closest to yours, as a percentage, co-authors hidden. "Show more" keeps going down the list.'],
  ['Top programs for you','Sessions ranked by how close their presenters are to you. Save them; ended ones fade.'],
  ['Search by name','Anyone, with affiliation shown, because names repeat.'],
  ['A person\'s card','Bio, affiliation, what they are presenting and when, a circle if they have claimed their profile. Save to contacts.'],
  ['A session\'s card','Day, time, room, authors; save it to your schedule or open it on the HFES site.'],
  ['Saved contacts and programs','Browser-local lists you can come back to during the week.']],
  shots:[['06-home.png','Home'],['08-person-card.png','A person'],['09-program-card.png','A session'],['11-saved-programs.png','Saved']]},
 student:{intro:'Offered only to people who ticked "I\'m a student" when claiming. Same map and matches, students only, in purple.',items:[
  ['Students-only map and matches','The filter runs on the server so a new student is never shown an empty list by luck of the draw.'],
  ['Programs stay unfiltered','Sessions are for everyone; only the people change.'],
  ['Asked once','The student question appears at claim time and nowhere else; changing it means resetting and re-claiming. Deliberate.']],
  shots:[['14-student-view.png','Student view'],['15-view-picker.png','The picker']]},
 hobby:{intro:'For what you do when you are not working. A word cloud, not a map.',items:[
  ['Give to get','Add your own hobbies first; then the cloud opens.'],
  ['The cloud','Every hobby at least two people share, up to 60, bigger when more people share it. Pinch, drag or use the − / + buttons to zoom in on the small ones; tap a word to see who.'],
  ['Hobby matches','People ranked by how close their hobbies are to yours: the same hobby counts fully, a related one (hiking and mountaineering) counts up to 80 percent and never more, unrelated ones not at all. Just a percentage; tap the person to see everything they wrote.'],
  ['Comma-separated, forgiving','"board games, climbing; tea" all parse. Plurals merge.'],
  ['No sessions, no co-author filter','Sharing a hobby with your lab-mate is a real match.']],
  shots:[['23-hobby-gate.png','The gate'],['12-hobby-cloud.png','The cloud'],['13-hobby-tap.png','Tap a hobby']]}};
function renderFeature(k){ const f=FEATURES[k]; document.getElementById('fpanel').innerHTML=`<div><p class="lede" style="margin-bottom:6px">${f.intro}</p><ul>${f.items.map(i=>`<li><b>${i[0]}</b><span>${i[1]}</span></li>`).join('')}</ul></div><div class="shots">${f.shots.map(s=>`<figure><img src="assets/${s[0]}" alt="" loading="lazy"><figcaption>${s[1]}</figcaption></figure>`).join('')}</div>`; bindLightbox(); }
document.querySelectorAll('#ftabs button').forEach(bt=>bt.addEventListener('click',()=>{ document.querySelectorAll('#ftabs button').forEach(x=>x.classList.toggle('on',x===bt)); renderFeature(bt.dataset.t); }));
renderFeature('academic');

// ---- what if ----
const WHATIF=[
 ['I mistype my name?','or use a nickname, drop a middle name, or my name changed','Close matches are suggested, leaning generous: surname plus affiliation is enough. A wrong suggestion costs one tap; a missed one would create a duplicate.','27-typo.png','Attendee: one tap. Owner: nothing.'],
 ['the attendee list is still downloading?','slow venue Wi-Fi','The form locks with a note and unlocks by itself. Before this, a fast typist could be sent to "create new profile" because the list was still empty.','21-keyin-loading.png','Attendee: wait a few seconds. Owner: nothing.'],
 ['I am new and nothing about me is online?','students, mostly','The web search returns nothing, the bio box stays empty with a hint, and the button stays off until something is typed. No placeholder text is ever published.','29-no-draft.png','Attendee: write a few sentences. Owner: nothing.'],
 ['placing me on the map takes too long?','worker busy or restarting','Placement normally takes three seconds. After three minutes the screen softens: keep using the app, your dot may still appear, and here is who to email if not.','19-placing.png','Attendee: continue. Owner: a watchdog email if jobs sit queued for over ten minutes.'],
 ['placing me fails outright?','a crash in the embedding step','The job retries itself twice. If it still fails, the attendee gets a screen with a reference code and a prefilled email; the owner gets an email with the error, the names affected and the exact command to re-run.','20-placing-failed.png','Attendee: email with a screenshot. Owner: paste the command from the email.'],
 ['I edit my profile while offline?','or the server restarts mid-save','The edit is kept in the browser, a banner says so, and it is re-sent when the connection is back, the tab regains focus, or the app next opens.','22-stale-sync.png','Attendee: nothing. Owner: nothing.'],
 ['the map changed since I loaded it?','someone else signed up','A line under the map says a newer map is ready, with a Refresh link. Checked on load, on focus and every minute.','22-stale-sync.png','Attendee: tap Refresh, or not.'],
 ['the data will not load at all?','the origin is down, a file is missing','One screen: "Couldn\'t load matches", Refresh, and an email address. The app also reports it to the server, which emails the owner, at most once every two minutes.','28-loaderror.png','Attendee: refresh, then email. Owner: an email arrives on its own.'],
 ['the fast embedding worker is down?','memory limit, restart','Every job falls back to a slower cold process automatically, about thirty seconds instead of three. Nobody sees an error; the owner gets a watchdog email that the worker socket is missing.','','Attendee: a longer wait. Owner: restart the worker.'],
 ['the whole hall is on one Wi-Fi address?','conference venues often are','Nothing is limited per address tightly enough to notice: 500 profile saves per ten minutes, no cooldown on bio drafting, and no per-address tracking anywhere.','','Attendee: nothing. Owner: nothing.'],
 ['two people share a name?','six pairs do, plus 23 Chens','Affiliation is required, and an exact name match that does not match the typed affiliation asks "is this you?" before showing anything. The stable identity is a programme ID, never the name.','03-confirm.png','Attendee: one extra confirmation.'],
 ['the owner is asleep?','the conference runs three days','A cron watchdog checks every five minutes: services, health, disk, memory, stuck jobs, database. Each problem emails once, then every thirty minutes until it clears, then "recovered".','','Owner: read the email in the morning.'],
 ['the pilot ends?','it did, on Oct 25','A notice on every open in the final days: it was a pilot, the site goes offline on a stated day, write down the people you want to reach, and tell us in the feedback box if you want it back next year. Nothing is kept after that.','31-sunset.png','Attendee: take notes. Owner: read the feedback.'],
];
document.getElementById('whatif').innerHTML=WHATIF.map(w=>`<details class="whatif"><summary>What if ${w[0]} <em>${w[1]}</em></summary><div class="body"><div><p>${w[2]}</p><div class="who">${w[4]}</div></div>${w[3]?`<img src="assets/${w[3]}" alt="" loading="lazy">`:''}</div></details>`).join('');
function bindLightbox(){ document.querySelectorAll('.film img, .card .shot img, .phone img, .fpanel img, .whatif img').forEach(im=>{ if(im.dataset.lb) return; im.dataset.lb=1; im.addEventListener('click',e=>{ e.stopPropagation(); lb.querySelector('img').src=im.src; lb.classList.add('on'); }); }); }
bindLightbox();
