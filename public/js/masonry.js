const sectionEl = document.querySelector('section')

// mainEl.style.display = "none"
let $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry();
    sectionEl.style= {}
    var $container =$('.grid');
    $container.masonry({
        itemSelector: '.grid-item',
        isFitWidth: true
    })
});