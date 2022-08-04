export default {
    name:"kategorijegrupe",
    title:"Kategorije Grupe",
    type:"document",

    fields: [
        {
            name:"ime",
            title:"Ime",
            type:"string",
        },
        {
            name:"slug",
            title:"Slug",
            type: "slug",
            options: {
                source: "name",
                maxLenght: 90
            }

        },
        {
            name:"slika",
            title: "Slika",
            type:"image",
            options: {
            hotspot: true,
            }
        }
        
    ]
}
