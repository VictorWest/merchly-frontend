export interface Testimony{
    id: number,
    imageUrl: string,
    name: string,
    occupation: string,
    review?: string
}

const testimonies: Testimony[] = [
    { id: 1, imageUrl: '/testimony/t-1.png', name: 'Sheldon', occupation: 'Meat Owner', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 2, imageUrl: '/testimony/t-2.png', name: 'Jackson', occupation: 'CEO of QuickPay', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 3, imageUrl: '/testimony/t-3.png', name: 'Gordon', occupation: 'RestauRice Owner', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'},
    { id: 4, imageUrl: '/testimony/t-4.png', name: 'Michael', occupation: 'CEO of Ship Ready', review: 'Merchly.io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'}
]

const clientStories: Testimony[] = [
    { id: 1, imageUrl: '/client-story/image1.png', name: 'James Carl', occupation: 'Management Team at First Foundation', review: 'Merchly Io made my foundations ability to collect fundraising donations so easy. Scott went ABOVE and beyond to help. I mean WAY above and beyond to help me. I love the cost free platform to grow my non-profit!'}
]

const teamMembers: Testimony[] = [
    { id: 1, imageUrl: '/team/scott.png', name: 'Scott', occupation: 'Chief Executive Officer' },
    { id: 2, imageUrl: '/testimony/t-2.png', name: 'Soc', occupation: 'Human Resources' }, 
    { id: 3, imageUrl: '/testimony/t-3.png', name: 'Corpus', occupation: 'Product Lead' },
    { id: 4, imageUrl: '/testimony/t-4.png', name: 'Rifqi', occupation: 'Product Designer' },
    { id: 5, imageUrl: '/team/james.png', name: 'James', occupation: 'Software Engineer' }
]

export const getTestimonies = () => {
    return JSON.stringify(testimonies, null, 2)
}

export const getClientStories = () => {
    return JSON.stringify(clientStories, null, 2)
} 

export const getTeamMembers = () => {
    return JSON.stringify(teamMembers, null, 2)
}

export const serviceLocations = [
    "Connecticut",
    "New York", 
    "Maine",
    "Pennsylvania",
    "Massachusetts",
    "Rhode Island",
    "New Hampshire",
    "Vermont",
    "New Jersey"
]


    // const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowSize({width: window.innerWidth, height: window.innerHeight })
    //     }
    //     handleResize()

    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])