export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        }
        ,
        {
            name: "naziv",
            title: "Naziv",
            type: "string"
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
        }
        ,
        {
            name: "cena",
            title: "Cena",
            type: "number"
        }
        ,
        {
            name: "opis",
            title: "Opis",
            type: "string"
        }
        ,
        {
            name: "quantity",
            title: "Quantity",
            type: "number"
        }
        ,
        {
            name:"kategorije",
            title:"Kategorije",
            type:'string',
    
        },
        {
            name:"grupa",
            titel:"Grupa",
            type:"string"
        }
        ,
        {
            name:"zaliha",
            title:"Zaliha",
            type:"number",
        }
    ]
}