export default {
    name:"kategorije",
    title:"Kategorije",
    type:"document",

    fields: [{
         name: "slika",
         title: "Slika",
         type:"image",
         options: {
            hotspot: true,
        }},
        {
            name:"ime",
            title:"Ime",
            type:"string",
        }
        ,
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLenght: 90
            }
        },
        {
            name:"grupa",
            title:"Grupa",
            type: 'string',
           
        }

    ]
}
