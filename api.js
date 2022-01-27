const BASE_URL = 'https://api.spacexdata.com/v4'

// API requests
async function companyInfo() {
    try {
        const response = await fetch(`${BASE_URL}/company`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function capsules() {
    try {
        const response = await fetch(`${BASE_URL}/capsules`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function cores() {
    try {
        const response = await fetch(`${BASE_URL}/cores`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function crew() {
    try {
        const response = await fetch(`${BASE_URL}/crew`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

async function dragons() {
    try {
        const response = await fetch(`${BASE_URL}/dragons`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

async function landpads() {
    try {
        const response = await fetch(`${BASE_URL}/landpads`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

async function launches() {
    try {
        const response = await fetch(`${BASE_URL}/launches`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

// FURTHER VERIFiCATION
async function launchpads() {
    try {
        const response = await fetch(`${BASE_URL}/launchpads`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function payloads() {
    try {
        const response = await fetch(`${BASE_URL}/payloads`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function roadsterInfo() {
    try {
        const response = await fetch(`${BASE_URL}/roadster`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function rockets() {
    try {
        const response = await fetch(`${BASE_URL}/rockets`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch(error) {
        console.log(error)
    }
}

async function ships() {
    try {
        const response = await fetch(`${BASE_URL}/ships`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch(error) {
        console.log(error)
    }
}

async function starlink() {
    try {
        const response = await fetch(`${BASE_URL}/starlink`)
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

// Display in HTML elements fetched from API
async function companyInfoHTML() {
    const info = await companyInfo()
    console.log(info);
    
    const htmlElement = document.querySelector('.company-info')
    htmlElement.innerHTML = `
        <div class='company-info-details'>
            <h2>Informações da Empresa</h2>
            <div class='executives'>
                <div class='executive-info'>
                    <h3>CEO</h3>
                    <img src='./images/elon-musk.jpg' alt='Elon Musk'>
                    <p>${info.ceo}</p>
                </div>
                <div class='executive-info'>
                    <h3>COO</h3>
                    <img src='./images/gwynne-shotwell.jpg' alt='Elon Musk'>
                    <p>${info.coo}</p>
                </div>
                <div class='executive-info'>
                    <h3>CTO</h3>
                    <img src='./images/elon-musk.jpg' alt='Elon Musk'>
                    <p>${info.cto}</p>
                </div>
                <div class='executive-info'>
                    <h3>CTO Propulsão</h3>
                    <img src='./images/tom-muller.jpg' alt='Elon Musk'>
                    <p>${info.cto_propulsion}</p>
                </div>
            </div>
        </div>
        `
}

{/* <h3>Funcionários</h3>
            <p>${info.employees}</p>
            <h3>Fundação</h3>
            <p>${info.founded}</p>
            <h3>Fundador</h3>
            <p>${info.founder}</p>
            <h3>Sede</h3>
            <p>${info.headquarters.address} ${info.headquarters.city} ${info.headquarters.state} USA</p>
            <h3>Locais de Lançamento</h3>
            <p>${info.launch_sites}</p>
            <h3>Links</h3>
            <p>Elon Musk Twitter: </p><p>${info.links.elon_twitter}</p>
            <p>Flickr: </p><p>${info.links.flickr}</p>
            <p>Twitter: </p><p>${info.links.twitter}</p>
            <p>Website: </p><p>${info.links.website}</p>
            <h3>Nome</h3>
            <p>${info.name}</p>
            <h3>Sumário</h3>
            <p>${info.summary}</p>
            <h3>Locais de Teste</h3>
            <p>${info.test_sites}</p>
            <h3>Valor de Mercado</h3>
            <p>${info.valuation}</p>
            <h3>Veículos</h3>
            <p>${info.vehicles}</p> */}

// General functions
function fetchAll() {
    companyInfo()
    capsules()
    cores()
    crew()
    dragons()
    landpads()
    launches()
    launchpads()
    payloads()
    roadsterInfo()
    rockets()
    ships()
    starlink()
}

function htmlHandle() {
    companyInfoHTML()
}

fetchAll()
htmlHandle()