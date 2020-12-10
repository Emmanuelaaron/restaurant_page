import header from '../components/header'
const menuu = () => {
    console.log ("I log")
    const elem = document.getElementById('content');
    elem.innerHTML = ''
    const menu = document.createElement('section')
    menu.appendChild(header())
    elem.appendChild(menu)
    console.log(elem)
    return elem
}

export default menuu