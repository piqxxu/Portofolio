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

function onFormSubmit (e) {
    e.preventDefault()
    
    const email = $("#input-email")
    const subject = $("#input-subject")
    const message = $("#input-message")

    if (!$(email).val()) {
        alert('Email is required.')
    } else if (!$(subject).val()) {
        alert('Subject is required.')
    } else if (!$(message).val()) { 
        alert('Message is required.')
    } else {
        alert('Form submitted :)') 
        $(email).val('')
        $(subject).val('')
        $(message).val('') 
    }

}