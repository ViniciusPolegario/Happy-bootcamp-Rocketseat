const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //insert data into the table
    await saveOrphanage(db, {        
        lat: "-22.7626236",
        lng: "-43.4997589",
        name: "lar dos meninos",        
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social. ",
        whatsapp:"970707070",
        images: [
            "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours:"Horário de visitas das 8h até 18h",
        open_on_weekends:"0"
    })

    //consult the data in the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    //query using id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
})