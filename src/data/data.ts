import { posts } from "@/data/blogs/posts"

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

export interface BlogData{
    id: string,
    coverImage: string,
    authorImage: string,
    category: 'Agency Collection' | 'Financial' | 'Payment' | 'Tips',
    title: string,
    date: string | number,
    author: string,
    position?: string,
    content?: string,
    contributors?: Array<{name: string, imageUrl: string}>,
    tableOfContent?: Array<string>
}

export const blogData: BlogData[] = posts.map((item) => (
    { id: item.id, coverImage: item.coverImage, authorImage: item.authorImage, category: item.category, title: item.title, date: item.date, author: item.author, content: item.content, position: item.position, contributors: item.contributors, tableOfContent: item.tableOfContent}
))

    // 

        //     <Image src="/blogs/image1.png" alt={`Image 1`} width={100} height={100} className="w-full object-cover" />
        //     <div className="flex justify-between items-center my-3">
        //         <p className="bg-[#F4F4F5] p-2 rounded-lg">Agency Collection</p>
        //         <p></p>
        //     </div>
        //     <h5 className="font-bold w-4/5"></h5>
        //     <div className="flex justify-between items-center">
        //         <div className="flex gap-3 items-center">
        //             <Image src="/team/scott.png" alt="Scott" width={50} height={50} className="rounded-full" />
        //             <p></p>
        //         </div>
        //         <p className="text-[#21C963] flex gap-1 items-center">
        //             <span>Learn more</span>
        //             <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.958 12.5L13.458 10M13.458 10L10.958 7.5M13.458 10L7.20801 10M17.833 10C17.833 14.1421 14.4751 17.5 10.333 17.5C6.19087 17.5 2.83301 14.1421 2.83301 10C2.83301 5.85786 6.19087 2.5 10.333 2.5C14.4751 2.5 17.833 5.85786 17.833 10Z" stroke="#21C963" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        //         </p>
        //     </div>
        // </div>
    // const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowSize({width: window.innerWidth, height: window.innerHeight })
    //     }
    //     handleResize()

    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])