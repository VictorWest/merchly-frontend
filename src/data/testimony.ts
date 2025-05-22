export interface Testimony{
    id: number,
    imageUrl: string,
    name: string,
    occupation: string,
    review: string
}

const testimonies: Testimony[] = [
    { id: 1, imageUrl: '/testimony/t-1.png', name: 'Sheldon', occupation: 'Meat Owner', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 2, imageUrl: '/testimony/t-2.png', name: 'Jackson', occupation: 'CEO of QuickPay', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 3, imageUrl: '/testimony/t-3.png', name: 'Gordon', occupation: 'RestauRice Owner', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 4, imageUrl: '/testimony/t-4.png', name: 'Michael', occupation: 'CEO of Ship Ready', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'}
]

export const getTestimonies = () => {
    return JSON.stringify(testimonies, null, 2)
}