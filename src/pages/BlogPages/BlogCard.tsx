import Image from "next/image";
import Link from "next/link";

export default function BlogCard({category, date, title, coverImage, author, authorImage, id} : {category: 'Agency Collection' | 'Financial' | 'Payment' | 'Tips', date: string | number, title: string, coverImage: string, author: string, authorImage: string, id: string}){
    return(
        <Link href={`/blogs/${id}`} className="md:w-[30%] space-y-3 text-xs md:text-sm">
            <div className="w-full overflow-hidden rounded-md">
                <Image src={coverImage} alt={`Image ${id}`} width={400} height={160} className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
            </div>
            
            <div className="flex justify-between items-center my-3">
                <p className="bg-[#F4F4F5] p-2 rounded-lg">{category}</p>
                <p>{date}</p>
            </div>
            <h5 className="font-bold md:w-4/5 hover:text-[#21C963] text-center md:text-start px-5 md:px-0 text-sm">{title}</h5>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <Image src={authorImage} alt="Scott" width={50} height={50} className="rounded-full" />
                    <p>{author}</p>
                </div>
                <p className="text-[#21C963] flex gap-1 items-center">
                    <span>Learn more</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.958 12.5L13.458 10M13.458 10L10.958 7.5M13.458 10L7.20801 10M17.833 10C17.833 14.1421 14.4751 17.5 10.333 17.5C6.19087 17.5 2.83301 14.1421 2.83301 10C2.83301 5.85786 6.19087 2.5 10.333 2.5C14.4751 2.5 17.833 5.85786 17.833 10Z" stroke="#21C963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </p>
            </div>
        </Link>
    )
}