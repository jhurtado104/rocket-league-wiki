const btnBackfire = document.getElementById('backfire-car');
const btnBreakout = document.getElementById('breakout-car');
const btnDominus = document.getElementById('dominus-car');
const btnGizmo = document.getElementById('gizmo-car');
const btnHotshot = document.getElementById('hotshot-car');
const btnMerc = document.getElementById('merc-car');
const btnOctane = document.getElementById('octane-car');
const btnPaladin = document.getElementById('paladin-car');
const btnRoadHog = document.getElementById('roadhog-car');
const btnVenom = document.getElementById('venom-car');
const btnXDevil = document.getElementById('xdevil-car');
const btnBlueTeam = docmuent.getElementById('blue-team');
const btnOrangeTeam = document.getElementById('orange-team');

function showBackfire() {
    btnBackfire.style['background-image'] = "url(RL/Cars/Backfire.png)";
    btnBackfire.classList.add("borderWhite");
    btnBackfire.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeBackfire()">Orange Team</button> <button class="car-teams blue" onclick="showBlueBackfire()">Blue Team</button>';
}

function showOrangeBackfire() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Backfire OT.png" class="OT-car">'
}

function showBlueBackfire() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Backfire BT.png" class="BT-car">'
}

function showBreakout() {
    btnBreakout.style['background-image'] = "url(RL/Cars/Breakout.png)";
    btnBreakout.classList.add("borderWhite");
    btnBreakout.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeBreakout()">Orange Team</button> <button class="car-teams blue" onclick="showBlueBreakout()">Blue Team</button>';
}

function showOrangeBreakout() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Breakout OT.png" class="OT-car">'
}

function showBlueBreakout() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Breakout BT.png" class="BT-car">'
}

function showDominus() {
    btnDominus.style['background-image'] = "url(RL/Cars/Dominus.png)";
    btnDominus.classList.add("borderWhite");
    btnDominus.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeDominus()">Orange Team</button> <button class="car-teams blue" onclick="showBlueDominus()">Blue Team</button>';
}

function showOrangeDominus() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Dominus OT.png" class="OT-car">'
}

function showBlueDominus() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Dominus BT.png" class="BT-car">'
}

function showGizmo() {
    btnGizmo.style['background-image'] = "url(RL/Cars/Gizmo.png)";
    btnGizmo.classList.add("borderWhite");
    btnGizmo.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeGizmo()">Orange Team</button> <button class="car-teams blue" onclick="showBlueGizmo()">Blue Team</button>';
}

function showOrangeGizmo() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Gizmo OT.png" class="OT-car">'
}

function showBlueGizmo() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Gizmo BT.png" class="BT-car">'
}

function showHotshot() {
    btnHotshot.style['background-image'] = "url(RL/Cars/Hotshot.png)";
    btnHotshot.classList.add("borderWhite");
    btnHotshot.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeHotshot()">Orange Team</button> <button class="car-teams blue" onclick="showBlueHotshot()">Blue Team</button>';
}

function showOrangeHotshot() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Hotshot OT.png" class="OT-car">'
}

function showBlueHotshot() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Hotshot BT.png" class="BT-car">'
}

function showMerc() {
    btnMerc.style['background-image'] = "url(RL/Cars/Merc.png)";
    btnMerc.classList.add("borderWhite");
    btnMerc.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeMerc()">Orange Team</button> <button class="car-teams blue" onclick="showBlueMerc()">Blue Team</button>';
}

function showOrangeMerc() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Merc OT.png" class="OT-car">'
}

function showBlueMerc() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Merc BT.png" class="BT-car">'
}

function showOctane() {
    btnOctane.style['background-image'] = "url(RL/Cars/Octane.png)";
    btnOctane.classList.add("borderWhite");
    btnOctane.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeOctane()">Orange Team</button> <button class="car-teams blue" onclick="showBlueOctane()">Blue Team</button>';
}

function showOrangeOctane() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Octane OT.png" class="OT-car">'
}

function showBlueOctane() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Octane BT.png" class="BT-car">'
}

function showPaladin() {
    btnPaladin.style['background-image'] = "url(RL/Cars/Paladin.png)";
    btnPaladin.classList.add("borderWhite");
    btnPaladin.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangePaladin()">Orange Team</button> <button class="car-teams blue" onclick="showBluePaladin()">Blue Team</button>';
}

function showOrangePaladin() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Paladin OT.png" class="OT-car">'
}

function showBluePaladin() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Paladin BT.png" class="BT-car">'
}

function showRoadHog() {
    btnRoadHog.style['background-image'] = "url(RL/Cars/RoadHog.png)";
    btnRoadHog.classList.add("borderWhite");
    btnRoadHog.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeRoadHog()">Orange Team</button> <button class="car-teams blue" onclick="showBlueRoadHog()">Blue Team</button>';
}

function showOrangeRoadHog() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Road Hog OT.png" class="OT-car">'
}

function showBlueRoadHog() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Road Hog BT.png" class="BT-car">'
}

function showVenom() {
    btnVenom.style['background-image'] = "url(RL/Cars/Venom.png)";
    btnVenom.classList.add("borderWhite");
    btnVenom.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeVenom()">Orange Team</button> <button class="car-teams blue" onclick="showBlueVenom()">Blue Team</button>';
}

function showOrangeVenom() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/Venom OT.png" class="OT-car">'
}

function showBlueVenom() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/Venom BT.png" class="BT-car">'
}

function showXDevil() {
    btnXDevil.style['background-image'] = "url(RL/Cars/X-Devil.png)";
    btnXDevil.classList.add("borderWhite");
    btnXDevil.value = " ";
    document.getElementById('team-btns').innerHTML = '<button class="car-teams orange" onclick="showOrangeXDevil()">Orange Team</button> <button class="car-teams blue" onclick="showBlueXDevil()">Blue Team</button>';
}

function showOrangeXDevil() {
    document.getElementById('ingame-OT-car').innerHTML = '<img src="RL/Cars/Orange Team/X-Devil OT.png" class="OT-car">'
}

function showBlueXDevil() {
    document.getElementById('ingame-BT-car').innerHTML = '<img src="RL/Cars/Blue Team/X-Devil BT.png" class="BT-car">'
}
