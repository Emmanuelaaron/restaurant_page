const header = () => {
    const header = document.createElement('nav')
    header.classList.add('text-light')
    const divRight = document.createElement('div')
    const logo = document.createElement('h1')
    logo.innerHTML = 'ER'
    const logoName = document.createElement('p')
    logoName.innerHTML = 'Emma\'s Restaurant' 
    divRight.appendChild(logo)
    divRight.appendChild(logoName)
    header.appendChild(divRight)
    return header
}

export default header