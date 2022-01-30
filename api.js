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
    <div class='company-info'>
        <h1>Informações sobre a companhia</h1>
        <section class="grid grid-row-1">
            <div class="item item-1">
                <h4>CEO</h4>
                <p>${info.ceo}</p>
            </div>
            <div class="item item-2">
                <h4>COO</h4>
                <p>${info.coo}</p>
            </div>
            <div class="item item-3">
                <h4>CTO</h4>
                <p>${info.cto}</p>
            </div>
            <div class="item item-4">
                <h4>CTO Propulsão</h4>
                <p>${info.cto_propulsion}</p>
            </div>
            <div class="item item-5">
                <h4>Funcionários</h4>
                <p>${info.employees}</p>
            </div>
            <div class="item item-6">
                <h4>Fundação</h4>
                <p>${info.founded}</p>
            </div>
            <div class="item item-7">
                <h4>Sede</h4>
                <p>${info.headquarters.address} ${info.headquarters.city} ${info.headquarters.state} USA</p>
            </div>
            <div class="item item-8">
                <h4>Locais de Lançamento</h4>
                <p>${info.launch_sites}</p>
            </div>
            <div class="item item-9">
                <h4>Links</h4>
                <p>${info.links.website}</p>
                <p>${info.links.flickr}</p>
                <p>${info.links.twitter}</p>
                <p>${info.links.elon_twitter}</p>
            </div>
            <div class="item item-10">
                <h4>Nome</h4>
                <p>${info.name}</p>
            </div>
            <div class="item item-11">
                <h4>Sumário</h4>
                <p>${info.summary}</p>
            </div>
            <div class="item item-12">
                <h4>Locais de Testes</h4>
                <p>${info.test_sites}</p>
            </div>
            <div class="item item-13">
                <h4>Valor de Mercado</h4>
                <p>${info.valuation}</p>
            </div>
            <div class="item item-14">
                <h4>Veículos</h4>
                <p>${info.vehicles}</p>
            </div>

        </section>
</div>
    `
}

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