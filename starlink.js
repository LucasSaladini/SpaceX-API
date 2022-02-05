const BASE_URL = 'https://api.spacexdata.com/v4'

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

async function mapStarlink() {
    try {
        const data = await starlink()
        // console.log(data)
        var doubleArray = data.map(nested => console.log(nested))
    } catch (error) {
        console.log(error)
    }
}

function displayInHTML () {
    mapStarlink()
}

mapStarlink()