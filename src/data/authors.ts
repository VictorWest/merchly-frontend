export interface Author{
    id: string | number,
    name: string,
    imageUrl: string,
    position: string,
    about?: string,
    socialMedia?: { facebook: string, instagram: string, twitter: string, linkedin: string }
}

export const authors: Author[] = [
    { id: 1, name: "Scott Waters", imageUrl: "/team/scott.png", position: "CEO of Process Payments Now", about: "Scott is a serial entrepreneur starting his first business at the age of 15. From there, Scott went on the run the top rated vape store in Richmond, VA for 7 years before closing the store to focus on new ventures. Scott has worked in the payment processing industry since 2019 and has helped thousands of merchant save money on their merchant services fees. Scott's unique entrepreneurial experiences have helped position Process Payments Now as an industry-leading payment processor.", socialMedia: {facebook: "", instagram: "", twitter: "", linkedin: ""}}
]