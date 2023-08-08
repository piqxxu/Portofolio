function toggleDetail (e) {
    const target = $(e.target)

    if($(target).hasClass('active')) {
        $(target).html('More Info').removeClass('active')
    }
    else {
        $(target).html('Less Info').addClass('active')
    }

    const parent = $(target).parents(".about-exp-item")
    const detail = $(parent).children(".about-exp-item-detail")
    
    $(detail).slideToggle()
}