function changeOuterLinks() {

    const linkContents = document.querySelectorAll('nav#link-list a');
    linkContents.forEach(element => {
        if (element.innerHTML.includes('outer-link')) {
            element.setAttribute('target', '_blank');
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll('nav').forEach((element) => {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.width = '30%';
        element.style.margin = '0px auto';
        element.style.border = 'solid blue 1px';
        element.style.padding = '16px';
    });

}

changeOuterLinks();

export { changeOuterLinks };