async function buscarMensagemNoBackend() {
    const main = document.querySelector("main")
    const persons = await fetch("https://back-lake-pi.vercel.app/").then((response) => response.json())
    persons.map((person) => {
       main.innerHTML += `
        <section id="${person.id}">
            <h2>Nome: ${person.name}</h2>
            <h3>Apelido: ${person.nickname}</h3>
            <h3>E-mail: ${person.email}</h3>
        </section>
        <hr>
       `
    })
}

buscarMensagemNoBackend()