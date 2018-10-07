import { country } from "../model/country.model";

export const countryList: country[] = [
    {
        country : "India",
        states : [
            {
                state : "Maharastra",
                cities : [
                    {city : "Pune"},
                    {city : "Nagpur"},
                    {city : "Amravati"}
                ]
            },
            {
                state : "Gujrat",
                cities : [
                    {city : "Valsad"},
                    {city : "Surat"},
                    {city : "Jamnagar"}
                ]
            }
      ]
    },
    {
        country : "USA",
        states : [
            {
                state : "Florida",
                cities : [
                    {city : "Maimi"},
                    {city : "Tampa"},
                    {city : "Cape Coral"}
                ]
            },
            {
                state : "California",
                cities : [
                    {city : "Okland"},
                    {city : "Los Angeles"},
                    {city : "San Diego"}
                ]
            }
      ]
    }
] 