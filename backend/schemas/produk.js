export default {
    name: 'produk',
    title: 'Produk',
    type: 'document',
    fields:[
        {
            name: 'namap',
            title: 'Namap',
            type: 'string'
        },
        {
            name: 'desk',
            title: 'Desk',
            type: 'string'
        },
        {
            name: 'urlgambar',
            title: 'URLGambar',
            type: 'image',
            options:{
                hotspot: true,
            }
        },
        {
            name: 'harga',
            title: 'Harga',
            type: 'string'
        },
    ],
}