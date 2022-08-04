import { string } from "prop-types";

export default {
    name: "narudzbina",
    title: "Narudzbina",
    type: "document",
    fields: [
        {
            name: "ime",
            title: "Ime",
            type: "string"
        },
        {
            name: "prezime",
            title: "Prezime",
            type: "string"
        },
        {
            name: "ulica",
            title: "Ulica",
            type: "string"
        },
        {
            name: "drzava",
            title: "Drzava",
            type: "string"
        },
        {
            name: "grad",
            title: "Grad",
            type: "string"
        },
        {
            name: "mail",
            title: "Mail",
            type: "string"
        },
        {
            name: "broj",
            title: "Broj",
            type: "string"
        },
        {
            name: "posta",
            title: "Posta",
            type: "string"
        },
        {
            name: "ukupnacena",
            title: "Ukupnacena",
            type: "number"
        },
        {
            name: "proizvod",
            title: "Proizvod",
            type: "array",
            of: [{ type: 'product' }],
        },
        {
            name:"Napomena",
            title:"Napomena",
            type:"string"
        }
    ]
}