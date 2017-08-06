console.log('Loaded!');
alert('babloo');
var element = document.getElementById('babloo');
element.innerHTML ='baa';
var img = document.getElementById('bab');
var mar =0;
function mover(){
    mar=mar+1;
    img.style.marginLeft=mar +'px';
}
img.onclick = function(){
    var interval=setInterval(mover,50);
};
