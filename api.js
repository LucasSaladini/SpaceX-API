const BASE_URL = 'https://api.spacexdata.com/v4'

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
