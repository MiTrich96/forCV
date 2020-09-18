// photoButton
let isDetailsOpened = false;
$('.photoButton').click(function() {
   $('.sell__details').show();
   $('.sell__important').hide();
});

$('#input__description').bind('input', function(){
    $('.symbols__count').html($(this).val().length);
    if ($(this).val().length >= 1500)
        $('#input__description').prop('disabled', true);
    else
        $('#input__description').prop('disabled', false);
});

//SEll button
$('.buttonSell').click(function() {
   $(".sell__block").show(300); 
   $(".sell__important").show(300);
    
   $("body").css("overflow","hidden");
   $(".opacity__block").css("display", "block");
});

$('.close__button').click(function() {
   $(".sell__block").hide(300);
   $('.sell__details').hide(300);

   $("body").css("overflow","auto");
   $(".opacity__block").css("display", "none");
});

//register button Log In
$('.register').click(function() {
    $(".register__block").show(300);
    
    $("body").css("overflow","hidden");
    $(".opacity__block").css("display", "block");
});

$('.register__close').click(function() {
    $(".register__block").hide(300);
    
    $("body").css("overflow","auto");
    $(".opacity__block").css("display", "none");
});

let isUpdateDateClicked = false;
let isTimeClicked = false;
let isPriceClicked = false;
let isMapClicked = false;

//close model window on click other windows
$(document).mouseup(function (e) {
    var container = $(".autorisation__block");
    var container2 = $(".register__block");
    var container3 = $(".sell__block");
    
    if (container.has(e.target).length === 0 &&
       container2.has(e.target).length === 0 &&
       container3.has(e.target).length === 0){
        container.hide(300);
        container2.hide(300);
        container3.hide(300);
        
        $('.sell__details').hide(300);
        $('body').css('overflow','auto');
        $('.opacity__block').css('display','none');
    }
    
    container = $(".timeButton");
    let block = $('.sort__time');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.sort__time').hide(300);
        $('.timeButton').css('background-color','azure');
        if (isTimeClicked) isTimeClicked = false;
    }
    
    container = $(".dateButton");
    block = $('.date__update');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.date__update').hide(300);
        $('.dateButton').css('background-color','azure');
        if (isUpdateDateClicked) isUpdateDateClicked = false;
    }
    
    container = $(".priceButton");
    block = $('.sort__price');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.sort__price').hide(300);
        $('.priceButton').css('background-color','azure');
        if (isPriceClicked) isPriceClicked = false;
    }
    
    container = $(".mapButton");
    block = $('.map');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.map').hide(300);
        $('.mapButton').css('background-color','azure');
        if (isMapClicked) isMapClicked = false;
    }
});

//Login button
$('.logIn').click(function() {
   $(".autorisation__block").show(300);
    
   $(".opacity__block").css("display", "block"); 
   $("body").css('overflow','hidden');
});

/* start navbar*/


/* end navbar*/

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        {
            $('.params__menu').css({
                'width': '98.75vw',
                'border-radius': '0',
                'margin': '0',
                'transition': '.5s',
            });
        }
    else
        {
            $('.params__menu').css({
                'width': '80%',
                'border': '0',
                'box-shadow': '5px 5px 5px rgba(0,0,0,0.1)',
                'border-radius': '50px',
                'margin': '0 10%',
                'transition': '.5s',
            });
        }
};

/*search params*/

let nameLastTime = '.selected__item1';

$('.item__rel').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item1').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item1';
    $('.params__current2').text(function(){
        return 'Relevance';
    });
});

$('.item__date').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item2').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item2';
    $('.params__current2').text(function(){
        return 'Date (most recent)';
    });
});

$('.item__pri1').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item3').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item3';
    $('.params__current2').text(function(){
        return 'Price: low to high';
    });
});

$('.item__pri2').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item4').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item4';
    $('.params__current2').text(function(){
        return 'Price: high to low';
    });
});

$('.item__clo').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item5').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item5';
    $('.params__current2').text(function(){
        return 'Closest';
    });
});

let nameLastDate = '.selected__date1';

$('.date__item1').click(function(){
    $(nameLastDate).css({
            'display': 'none',
        });
    $('.selected__date1').css({
            'display': 'block',
        });
    nameLastDate = '.selected__date1';
    $('.params__current3').text(function(){
        return 'All listings';
    });
});

$('.date__item2').click(function(){
    $(nameLastDate).css({
            'display': 'none',
        });
    $('.selected__date2').css({
            'display': 'block',
        });
    nameLastDate = '.selected__date2';
    $('.params__current3').text(function(){
        return 'The last 24 hours';
    });
});

$('.date__item3').click(function(){
    $(nameLastDate).css({
            'display': 'none',
        });
    $('.selected__date3').css({
            'display': 'block',
        });
    nameLastDate = '.selected__date3';
    $('.params__current3').text(function(){
        return 'The last 7 days';
    });
});

$('.date__item4').click(function(){
    $(nameLastDate).css({
            'display': 'none',
        });
    $('.selected__date4').css({
            'display': 'block',
        });
    nameLastDate = '.selected__date4';
    $('.params__current3').text(function(){
        return 'The last 30 days';
    });
});

$('.mapButton').click(function() {
    if (!isMapClicked){         
    $('.map').show(200);
    $('.mapButton').css('background-color','rgb(72,209,204)');
    }
    else
    {
        $('.map').css('display', 'none');
        $('.mapButton').css('background-color','azure');
    }
        
    isMapClicked = !isMapClicked;
});

$('.closeMap').click(function() {
    $('.map').hide(300);
    $('.mapButton').css('background-color','azure');
});

$('.dateButton').click(function() {
    if (!isUpdateDateClicked){         $('.date__update').show(200);
    $('.dateButton').css('background-color','rgb(72,209,204)');
    }
    else
        {
            $('.date__update').css('display', 'none');
            $('.dateButton').css('background-color','azure');
        }
        
    isUpdateDateClicked = !isUpdateDateClicked;
});

$('.timeButton').click(function() {
    if (!isTimeClicked){         $('.sort__time').show(200);
    $('.timeButton').css('background-color','rgb(72,209,204)');
    }
    else
        {
            $('.sort__time').css('display', 'none');
            $('.timeButton').css('background-color','azure');
        }
        
    isTimeClicked = !isTimeClicked;
});

$('.priceButton').click(function() {
    if (!isPriceClicked){         $('.sort__price').show(200);
    $('.priceButton').css('background-color','rgb(72,209,204)');
    }
    else
        {
            $('.sort__price').css('display', 'none');
            $('.priceButton').css('background-color','azure');
        }
        
    isPriceClicked = !isPriceClicked;
});

let nameLastOfSort = '';

$('.button__car').click(function() {
    if (nameLastOfSort == '.icon__car') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
        $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__car').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__car';
    }
});

$('.button__house').click(function() {
    if (nameLastOfSort == '.icon__house') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__house').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__house';
    }
});

$('.button__mobile').click(function() {
    if (nameLastOfSort == '.icon__mobile') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__mobile').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__mobile';
    }
});

$('.button__sport').click(function() {
    if (nameLastOfSort == '.icon__sport') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__sport').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__sport';
    }
});

$('.button__movie').click(function() {
    if (nameLastOfSort == '.icon__movie') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__movie').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__movie';
    }
});

$('.button__child').click(function() {
    if (nameLastOfSort == '.icon__child') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__child').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__child';
    }
});

$('.button__other').click(function() {
    if (nameLastOfSort == '.icon__other') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__other').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__other';
    }
});

$('.button__job').click(function() {
    if (nameLastOfSort == '.icon__job') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__job').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__job';
    }
});

$('.button__fashion').click(function() {
    if (nameLastOfSort == '.icon__fashion') {         $(`${nameLastOfSort}>.choosed`).css('display','none'); 
        nameLastOfSort = '';
    }
    else
    {
         $(`${nameLastOfSort}>.choosed`).css('display','none');
        $('.icon__fashion').append($("<img class='choosed' src='images/favicons/searchicons/close.png'>"));
        $('.choosed').css({
         'width': '10px',
         'height': '10px',
         'position': 'absolute',
         'right': '0',
         'top': '0'
        });
        nameLastOfSort = '.icon__fashion';
    }
});
/*end search params*/

/*sell items*/
let nameOfLastSellItem = '';
$('.sell__item1').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item1').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item1';
});

$('.sell__item2').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item2').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item2';
});

$('.sell__item3').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item3').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item3';
});

$('.sell__item4').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item4').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item4';
});

$('.sell__item5').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item5').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item5';
});

$('.sell__item6').click(function() {
    $(nameOfLastSellItem).css('background-color','#fff');
    $('.sell__item6').css('background-color', 'rgb(72,209,204)');
    nameOfLastSellItem = '.sell__item6';
});



