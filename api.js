const API_URL = 'https://api.spacexdata.com/v3'

async function fetchData() {
    try {
        const request = await fetch(API_URL)
        const data = await request.json()
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

async function repoInfo() {
    try {
        const info = await fetchData()
        // console.log(info);

        const description = info.description
        const docs = info.docs
        const project = info.project_link
        const version = info.version
        console.log(description, docs, project, version);

        var repoInfo = document.querySelector('.repo__info');
        repoInfo.innerHTML = `<div>
            <h3>Descrição</h3>
            <p>${description}</p>
            <h3>Documentação</h3>
            <p>${docs}</p>
            <h3>Repositório</h3>
            <p>${project}</p>
            <h3>Versão</h3>
            <p>${version}</p>
        </div>`

    } catch (error) {
        console.log(error);
    }
}

fetchData()
repoInfo()