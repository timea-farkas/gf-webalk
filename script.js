let pic = [
{photo: 'kepek/k01.jpg', title: 'Ez itt a cím1', description: 'Ez itt a szöveg.1'}, 
{photo: 'kepek/k02.jpg', title: 'Ez itt a cím2', description: 'Ez itt a szöveg.2'},
{photo: 'kepek/k03.jpg', title: 'Ez itt a cím3', description: 'Ez itt a szöveg.3'},
{photo: 'kepek/k04.jpg', title: 'Ez itt a cím4', description: 'Ez itt a szöveg.4'},
{photo: 'kepek/k05.jpg', title: 'Ez itt a cím5', description: 'Ez itt a szöveg.5'},
{photo: 'kepek/k06.jpg', title: 'Ez itt a cím6', description: 'Ez itt a szöveg.6'},
{photo: 'kepek/k07.jpg', title: 'Ez itt a cím7', description: 'Ez itt a szöveg.7'},
{photo: 'kepek/k08.jpg', title: 'Ez itt a cím8', description: 'Ez itt a szöveg.8'},
{photo: 'kepek/k09.jpg', title: 'Ez itt a cím9', description: 'Ez itt a szöveg.9'},
{photo: 'kepek/k10.jpg', title: 'Ez itt a cím10', description: 'Ez itt a szöveg.10'}]


//függvény, ami egy keretbe betölti az aktuális thumbnail képet és a feliratát
let loadThumbnails = aktualis => {
    $('.also').append(
        `<div class="belso">
            <p class="nem-latszik" id="p${aktualis}">${pic[aktualis].title}</p>
            <img class="kiskep-nincskatt" id="k${aktualis}" data-kiskep="${aktualis}" src="${pic[aktualis].photo}">
        </div>`
    )
}
//minden thumbnail képet betölt a tömbből
let thumbn = 0
pic.forEach(() => {
    loadThumbnails(thumbn)
    thumbn++
})


//a függvény, ami betölti az aktuális nagy képet és a hozzá tartozó szövegeket
let loadPhoto = (photoNumber) => {
    $('#nagykep').attr('src', pic[photoNumber].photo);
    $('#photo-title').text(`${pic[photoNumber].title}`)
    $('#photo-description').text(`${pic[photoNumber].description}`)
}
//betölti a 0. képet
let currentPhoto = 0
loadPhoto(0)

//ha a thumbnailre mutatok, megjelenik felette a felirat
$('div.also>div.belso>img').hover((event) => {
    var szam = $(event.target).attr('data-kiskep')
    $(`p#p${szam}`).toggleClass("latszik")
})

//thumbnailre kattintva az megnő és a szegélye fehér lesz (a többi visszaáll az eredetire),
//felülre betölti a megfelelő nagy képet és szöveget
$('.belso>img').click( (event) => {
    $('.belso>img').attr('class', 'kiskep-nincskatt')
    $(event.target).toggleClass("kiskep-katt")
    var szam = $(event.target).attr('data-kiskep')
    loadPhoto(szam)
})


//jobb nyílra kattintva a felső nagy kép vált a következő képre, thumbnail vele tart, a szöveg is
$('#jobb-nyil').click( () => {
    currentPhoto++
    currentPhoto = currentPhoto%pic.length
    loadPhoto(currentPhoto)
    $('.belso>img').attr('class', 'kiskep-nincskatt')
    $(`.belso>img#k${currentPhoto}`).toggleClass("kiskep-katt")
   })

//bal nyílra kattintva a felső nagy kép vált a következő képre, thumbnail vele tart, a szöveg is
$('#bal-nyil').click( () => {
    if (currentPhoto === 0) {
        currentPhoto = pic.length-1
    } else {
        currentPhoto--
    }
    loadPhoto(currentPhoto)
    $('.belso>img').attr('class', 'kiskep-nincskatt')
    $(`.belso>img#k${currentPhoto}`).toggleClass("kiskep-katt")
})