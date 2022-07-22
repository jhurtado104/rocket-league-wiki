const btnCalculate = document.getElementById('calculate-btn');
const playerRankorMMR = document.getElementById('rank-or-mmr');


// Lets user use the ENTER key on their keyboard as an option to call the calculate function.
playerRankorMMR.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calculate();
    }
})

// This function is used to both calculate their MMR, or rank in the game based on stats 
// provided by the Rocket League Tracker website. It tests all possible inputs valid or
// invalid.
function calculate() {    
    if (playerRankorMMR.value === 'Supersonic Legend' ) {
        document.getElementById("adding-HTML").innerHTML = '<div class="supersonic-background rank-range"> <img src="RL/Ranks/TSupersonic.png" class="answer-img"> <p>1,878 - 1,925</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,838 - 1,878</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,789 - 1,838</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,745 - 1,789</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,709 - 1,745</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,709 - 1,925</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>1,677 - 1,709</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>1,647 - 1,677</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>1,604 - 1,647</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>1,575 - 1,604</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>1,575 - 1,709</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>1,537 - 1,575</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>1,499 - 1,537</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>1,460 - 1,499</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>1,435 - 1,460</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>1,435 - 1,575</p> </div>';
    } else if (playerRankorMMR.value === 'Grand Champion') {
        document.getElementById("adding-HTML").innerHTML = '<div class="grandchamp-background rank-range-banner"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>1,435 - 1,878</p> </div>';
    } else if (playerRankorMMR.value === 'Champion III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,402 - 1,435</p> </div>';
    } else if (playerRankorMMR.value === 'Champion III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,369 - 1,402</p> </div>';
    } else if (playerRankorMMR.value === 'Champion III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,336 - 1,369</p> </div>';
    } else if (playerRankorMMR.value === 'Champion III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,315 - 1,336</p> </div>';
    } else if (playerRankorMMR.value === 'Champion III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,315 - 1,435</p> </div>';
    } else if (playerRankorMMR.value === 'Champion II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>1,282 - 1,315</p> </div>';
    } else if (playerRankorMMR.value === 'Champion II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>1,249 - 1,282</p> </div>';
    } else if (playerRankorMMR.value === 'Champion II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>1,215 - 1,249</p> </div>';
    } else if (playerRankorMMR.value === 'Champion II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>1,195 - 1,215</p> </div>';
    } else if (playerRankorMMR.value === 'Champion II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>1,195 - 1,315</p> </div>';
    } else if (playerRankorMMR.value === 'Champion I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>1,162 - 1,195</p> </div>';
    } else if (playerRankorMMR.value === 'Champion I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>1,128 - 1,162</p> </div>';
    } else if (playerRankorMMR.value === 'Champion I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>1,095 - 1,128</p> </div>';
    } else if (playerRankorMMR.value === 'Champion I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>1,075 - 1,095</p> </div>';
    } else if (playerRankorMMR.value === 'Champion I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>1,075 - 1,195</p> </div>';
    } else if (playerRankorMMR.value === 'Champion') {
        document.getElementById("adding-HTML").innerHTML = '<div class="champ-background rank-range-banner"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>1,075 - 1,435</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>1,052 - 1,075</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>1,037 - 1,052</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>1,005 - 1,037</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>995 - 1,005</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>995 - 1,075</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>972 - 995</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>948 - 972</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>925 - 948</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>915 - 925</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>915 - 995</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>892 - 915</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>868 - 892</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>845 - 868</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>835 - 845</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>835 - 915</p> </div>';
    } else if (playerRankorMMR.value === 'Diamond') {
        document.getElementById("adding-HTML").innerHTML = '<div class="diamond-background rank-range-banner"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>835 - 1,075</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>817 - 835</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>798 - 817</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>780 - 798</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>775 - 780</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>775 - 835</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>757 - 775</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>738 - 757</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>720 - 738</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>715 - 720</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>715 - 775</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>697 - 715</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>678 - 697</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>659 - 678</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>655 - 659</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>655 - 715</p> </div>';
    } else if (playerRankorMMR.value === 'Platinum') {
        document.getElementById("adding-HTML").innerHTML = '<div class="plat-background rank-range-banner"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>655 - 835</p> </div>';
    } else if (playerRankorMMR.value === 'Gold III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>637 - 655</p> </div>';
    } else if (playerRankorMMR.value === 'Gold III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>618 - 637</p> </div>';
    } else if (playerRankorMMR.value === 'Gold III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>600 - 618</p> </div>';
    } else if (playerRankorMMR.value === 'Gold III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>595 - 600</p> </div>';
    } else if (playerRankorMMR.value === 'Gold III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>595 - 655</p> </div>';
    } else if (playerRankorMMR.value === 'Gold II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>577 - 595</p> </div>';
    } else if (playerRankorMMR.value === 'Gold II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>558 - 577</p> </div>';
    } else if (playerRankorMMR.value === 'Gold II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>539 - 558</p> </div>';
    } else if (playerRankorMMR.value === 'Gold II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>535 - 539</p> </div>';
    } else if (playerRankorMMR.value === 'Gold II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>535 - 595</p> </div>';
    } else if (playerRankorMMR.value === 'Gold I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>517 - 535</p> </div>';
    } else if (playerRankorMMR.value === 'Gold I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>498 - 517</p> </div>';
    } else if (playerRankorMMR.value === 'Gold I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>480 - 498</p> </div>';
    } else if (playerRankorMMR.value === 'Gold I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>475 - 480</p> </div>';
    } else if (playerRankorMMR.value === 'Gold I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>475 - 535</p> </div>';
    } else if (playerRankorMMR.value === 'Gold') {
        document.getElementById("adding-HTML").innerHTML = '<div class="gold-background rank-range-banner"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>475 - 655</p> </div>';
    } else if (playerRankorMMR.value === 'Silver III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>457 - 475</p> </div>';
    } else if (playerRankorMMR.value === 'Silver III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>438 - 457</p> </div>';
    } else if (playerRankorMMR.value === 'Silver III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>420 - 438</p> </div>';
    } else if (playerRankorMMR.value === 'Silver III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>415 - 420</p> </div>';
    } else if (playerRankorMMR.value === 'Silver III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>415 - 475</p> </div>';
    } else if (playerRankorMMR.value === 'Silver II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>397 - 415</p> </div>';
    } else if (playerRankorMMR.value === 'Silver II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>381 - 397</p> </div>';
    } else if (playerRankorMMR.value === 'Silver II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>363 - 381</p> </div>';
    } else if (playerRankorMMR.value === 'Silver II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>355 - 363</p> </div>';
    } else if (playerRankorMMR.value === 'Silver II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>355 - 415</p> </div>';
    } else if (playerRankorMMR.value === 'Silver I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>337 - 355</p> </div>';
    } else if (playerRankorMMR.value === 'Silver I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>323 - 337</p> </div>';
    } else if (playerRankorMMR.value === 'Silver I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>300 - 323</p> </div>';
    } else if (playerRankorMMR.value === 'Silver I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>295 - 300</p> </div>';
    } else if (playerRankorMMR.value === 'Silver I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>295 - 355</p> </div>';
    } else if (playerRankorMMR.value === 'Silver') {
        document.getElementById("adding-HTML").innerHTML = '<div class="silver-background rank-range-banner"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>295 - 475</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze III Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>277 - 295</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze III Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>259 - 277</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze III Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>242 - 259</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze III Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>236 - 242</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>236 - 295</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze II Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>217 - 236</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze II Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>201 - 217</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze II Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>180 - 201</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze II Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>176 - 180</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>176 - 236</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze I Division IV') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>159 - 176</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze I Division III') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>156 - 159</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze I Division II') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>126 - 156</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze I Division I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>0 - 126</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze I') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>0 - 176</p> </div>';
    } else if (playerRankorMMR.value === 'Bronze') {
        document.getElementById("adding-HTML").innerHTML = '<div class="bronze-background rank-range-banner"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>0 - 295</p> </div>';
    } else if (playerRankorMMR.value > 1925) {
        document.getElementById("adding-HTML").innerHTML = '<p class="error-message">Your MMR rank is way above the highest recorded person, which means that you are in Supersonic Legend!</p>';
    } else if (playerRankorMMR.value > 1878 && playerRankorMMR.value <= 1925) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box supersonic-background"> <img src="RL/Ranks/TSupersonic.png" class="answer-img"> <p>Supersonic Legend</p> </div>';
    } else if (playerRankorMMR.value > 1834 && playerRankorMMR.value <= 1878) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box supersonic-background"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>Grand Champion III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1789 && playerRankorMMR.value <= 1838) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>Grand Champion III Division III</p> </div>';
    } else if (playerRankorMMR.value > 1745 && playerRankorMMR.value <= 1789) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>Grand Champion III Division II</p> </div>';
    } else if (playerRankorMMR.value > 1709 && playerRankorMMR.value <= 1745) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp3.png" class="answer-img"> <p>Grand Champion III Division I</p> </div>';
    } else if (playerRankorMMR.value > 1677 && playerRankorMMR.value <= 1709) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>Grand Champion II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1647 && playerRankorMMR.value <= 1677) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>Grand Champion II Division III</p> </div>';
    } else if (playerRankorMMR.value > 1604 && playerRankorMMR.value <= 1647) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>Grand Champion II Division II</p> </div>';
    } else if (playerRankorMMR.value > 1575 && playerRankorMMR.value <= 1604) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp2.png" class="answer-img"> <p>Grand Champion II Division I</p> </div>';
    } else if (playerRankorMMR.value > 1537 && playerRankorMMR.value <= 1575) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>Grand Champion I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1499 && playerRankorMMR.value <= 1537) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>Grand Champion I Division III</p> </div>';
    } else if (playerRankorMMR.value > 1460 && playerRankorMMR.value <= 1499) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>Grand Champion I Division II</p> </div>';
    } else if (playerRankorMMR.value > 1435 && playerRankorMMR.value <= 1460) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box grandchamp-background"> <img src="RL/Ranks/TGrandChamp1.png" class="answer-img"> <p>Grand Champion I Division I</p> </div>';
    } else if (playerRankorMMR.value > 1402 && playerRankorMMR.value <= 1435) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>Champion III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1369 && playerRankorMMR.value <= 1402) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>Champion III Division III</p> </div>';
    } else if (playerRankorMMR.value > 1336 && playerRankorMMR.value <= 1369) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>Champion III Division II</p> </div>';
    } else if (playerRankorMMR.value > 1315 && playerRankorMMR.value <= 1336) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp3.png" class="answer-img"> <p>Champion III Division I</p> </div>';
    } else if (playerRankorMMR.value > 1282 && playerRankorMMR.value <= 1315) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>Champion II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1249 && playerRankorMMR.value <= 1282) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>Champion II Division III</p> </div>';
    } else if (playerRankorMMR.value > 1215 && playerRankorMMR.value <= 1249) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>Champion II Division II</p> </div>';
    } else if (playerRankorMMR.value > 1195 && playerRankorMMR.value <= 1215) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp2.png" class="answer-img"> <p>Champion II Division I</p> </div>';
    } else if (playerRankorMMR.value > 1162 && playerRankorMMR.value <= 1195) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>Champion I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1128 && playerRankorMMR.value <= 1162) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>Champion I Division III</p> </div>';
    } else if (playerRankorMMR.value > 1095 && playerRankorMMR.value <= 1128) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>Champion I Division II</p> </div>';
    } else if (playerRankorMMR.value > 1075 && playerRankorMMR.value <= 1095) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box champ-background"> <img src="RL/Ranks/TChamp1.png" class="answer-img"> <p>Champion I Division I</p> </div>';
    } else if (playerRankorMMR.value > 1052 && playerRankorMMR.value <= 1075) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>Diamond III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 1037 && playerRankorMMR.value <= 1052) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>Diamond III Division III</p> </div>';
    } else if (playerRankorMMR.value > 1005 && playerRankorMMR.value <= 1037) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>Diamond III Division II</p> </div>';
    } else if (playerRankorMMR.value > 995 && playerRankorMMR.value <= 1005) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond3.png" class="answer-img"> <p>Diamond III Division I</p> </div>';
    } else if (playerRankorMMR.value > 972 && playerRankorMMR.value <= 995) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>Diamond II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 948 && playerRankorMMR.value <= 972) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>Diamond II Division III</p> </div>';
    } else if (playerRankorMMR.value > 925 && playerRankorMMR.value <= 948) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>Diamond II Division II</p> </div>';
    } else if (playerRankorMMR.value > 915 && playerRankorMMR.value <= 925) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond2.png" class="answer-img"> <p>Diamond II Division I</p> </div>';
    } else if (playerRankorMMR.value > 892 && playerRankorMMR.value <= 915) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>Diamond I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 868 && playerRankorMMR.value <= 892) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>Diamond I Division III</p> </div>';
    } else if (playerRankorMMR.value > 845 && playerRankorMMR.value <= 868) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>Diamond I Division II</p> </div>';
    } else if (playerRankorMMR.value > 835 && playerRankorMMR.value <= 845) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box diamond-background"> <img src="RL/Ranks/TDiamond1.png" class="answer-img"> <p>Diamond I Division I</p> </div>';
    } else if (playerRankorMMR.value > 817 && playerRankorMMR.value <= 835) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>Platinum III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 798 && playerRankorMMR.value <= 817) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>Platinum III Division III</p> </div>';
    } else if (playerRankorMMR.value > 780 && playerRankorMMR.value <= 798) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>Platinum III Division II</p> </div>';
    } else if (playerRankorMMR.value > 775 && playerRankorMMR.value <= 780) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat3.png" class="answer-img"> <p>Platinum III Division I</p> </div>';
    } else if (playerRankorMMR.value > 757 && playerRankorMMR.value <= 775) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>Platinum II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 738 && playerRankorMMR.value <= 757) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>Platinum II Division III</p> </div>';
    } else if (playerRankorMMR.value > 720 && playerRankorMMR.value <= 738) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>Platinum II Division II</p> </div>';
    } else if (playerRankorMMR.value > 715 && playerRankorMMR.value <= 720) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat2.png" class="answer-img"> <p>Platinum II Division I</p> </div>';
    } else if (playerRankorMMR.value > 697 && playerRankorMMR.value <= 715) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>Platinum I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 678 && playerRankorMMR.value <= 697) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>Platinum I Division III</p> </div>';
    } else if (playerRankorMMR.value > 659 && playerRankorMMR.value <= 678) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>Platinum I Division II</p> </div>';
    } else if (playerRankorMMR.value > 655 && playerRankorMMR.value <= 659) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box plat-background"> <img src="RL/Ranks/TPlat1.png" class="answer-img"> <p>Platinum I Division I</p> </div>';
    } else if (playerRankorMMR.value > 637 && playerRankorMMR.value <= 655) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>Gold III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 618 && playerRankorMMR.value <= 637) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>Gold III Division III</p> </div>';
    } else if (playerRankorMMR.value > 600 && playerRankorMMR.value <= 618) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>Gold III Division II</p> </div>';
    } else if (playerRankorMMR.value > 595 && playerRankorMMR.value <= 600) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold3.png" class="answer-img"> <p>Gold III Division I</p> </div>';
    } else if (playerRankorMMR.value > 577 && playerRankorMMR.value <= 595) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>Gold II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 558 && playerRankorMMR.value <= 577) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>Gold II Division III</p> </div>';
    } else if (playerRankorMMR.value > 539 && playerRankorMMR.value <= 558) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>Gold II Division II</p> </div>';
    } else if (playerRankorMMR.value > 535 && playerRankorMMR.value <= 539) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold2.png" class="answer-img"> <p>Gold II Division I</p> </div>';
    } else if (playerRankorMMR.value > 517 && playerRankorMMR.value <= 535) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>Gold I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 498 && playerRankorMMR.value <= 517) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>Gold I Division III</p> </div>';
    } else if (playerRankorMMR.value > 480 && playerRankorMMR.value <= 498) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>Gold I Division II</p> </div>';
    } else if (playerRankorMMR.value > 475 && playerRankorMMR.value <= 480) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box gold-background"> <img src="RL/Ranks/TGold1.png" class="answer-img"> <p>Gold I Division I</p> </div>';
    } else if (playerRankorMMR.value > 457 && playerRankorMMR.value <= 475) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>Silver III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 438 && playerRankorMMR.value <= 457) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>Silver III Division III</p> </div>';
    } else if (playerRankorMMR.value > 420 && playerRankorMMR.value <= 438) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>Silver III Division II</p> </div>';
    } else if (playerRankorMMR.value > 415 && playerRankorMMR.value <= 420) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver3.png" class="answer-img"> <p>Silver III Division I</p> </div>';
    } else if (playerRankorMMR.value > 397 && playerRankorMMR.value <= 415) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>Silver II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 381 && playerRankorMMR.value <= 397) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>Silver II Division III</p> </div>';
    } else if (playerRankorMMR.value > 363 && playerRankorMMR.value <= 381) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>Silver II Division II</p> </div>';
    } else if (playerRankorMMR.value > 355 && playerRankorMMR.value <= 363) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver2.png" class="answer-img"> <p>Silver II Division I</p> </div>';
    } else if (playerRankorMMR.value > 337 && playerRankorMMR.value <= 355) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>Silver I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 323 && playerRankorMMR.value <= 337) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>Silver I Division III</p> </div>';
    } else if (playerRankorMMR.value > 300 && playerRankorMMR.value <= 323) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>Silver I Division II</p> </div>';
    } else if (playerRankorMMR.value > 295 && playerRankorMMR.value <= 300) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box silver-background"> <img src="RL/Ranks/TSilver1.png" class="answer-img"> <p>Silver I Division I</p> </div>';
    } else if (playerRankorMMR.value > 277 && playerRankorMMR.value <= 295) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>Bronze III Division IV</p> </div>';
    } else if (playerRankorMMR.value > 259 && playerRankorMMR.value <= 277) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>Bronze III Division III</p> </div>';
    } else if (playerRankorMMR.value > 242 && playerRankorMMR.value <= 259) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>Bronze III Division II</p> </div>';
    } else if (playerRankorMMR.value > 236 && playerRankorMMR.value <= 242) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze3.png" class="answer-img"> <p>Bronze III Division I</p> </div>';
    } else if (playerRankorMMR.value > 217 && playerRankorMMR.value <= 236) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>Bronze II Division IV</p> </div>';
    } else if (playerRankorMMR.value > 201 && playerRankorMMR.value <= 217) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>Bronze II Division III</p> </div>';
    } else if (playerRankorMMR.value > 180 && playerRankorMMR.value <= 201) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>Bronze II Division II</p> </div>';
    } else if (playerRankorMMR.value > 176 && playerRankorMMR.value <= 180) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze2.png" class="answer-img"> <p>Bronze II Division I</p> </div>';
    } else if (playerRankorMMR.value > 159 && playerRankorMMR.value <= 176) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>Bronze I Division IV</p> </div>';
    } else if (playerRankorMMR.value > 156 && playerRankorMMR.value <= 159) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>Bronze I Division III</p> </div>';
    } else if (playerRankorMMR.value > 126 && playerRankorMMR.value <= 156) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>Bronze I Division II</p> </div>';
    } else if (playerRankorMMR.value >= 0 && playerRankorMMR.value <= 126) {
        document.getElementById("adding-HTML").innerHTML = '<div class="answer-box bronze-background"> <img src="RL/Ranks/TBronze1.png" class="answer-img"> <p>Bronze I Division I</p> </div>';
    } else if (playerRankorMMR.value < 0) {
        document.getElementById("adding-HTML").innerHTML = '<p class="error-message">Your MMR rank can not be a negative number.</p>';
    } else {
        document.getElementById("adding-HTML").innerHTML = '<p class="error-message">THE INPUT BOX IS CASE SENSATIVE. MAKE SURE IT IS SPELLED CORRECTLY OTHERWISE WE CAN NOT DETERMINE THE CORRECT RANGES OR RANK YOU ARE TRYING TO ENTER.</p>';
    }

    if (playerRankorMMR.value === '') {
        document.getElementById("adding-HTML").innerHTML = '<p class="error-message">PLEASE ENTER A RANK OR MMR.</p>';
    }
}