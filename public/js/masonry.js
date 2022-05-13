const sectionEl = document.querySelector('section')

// mainEl.style.display = "none"
let $grid = $('.grid').masonry({
    // percentPosition: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    fitWidth: true,
    transitionDuration: '.8s'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry();
    sectionEl.style= {}
});