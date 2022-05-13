const updateTheme = async (event) => {
    event.preventDefault();
    el = event.target
    el.closest('.theme_card')
    console.log( el.closest('.theme_card'))
    let sel_theme_id = el.closest('.theme_card').getAttribute("id");

    const response = await fetch(`/api/users/${sel_theme_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        event
        location.reload()
    } else {
        alert(response.statusText);
    }
};

document.querySelectorAll('.theme_card').forEach(element => {
    element.addEventListener('click', updateTheme)
});
