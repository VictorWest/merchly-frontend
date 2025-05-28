import SocialMediaIcons from "@/components/SocialMediaIcons"
import { authors } from "@/data/authors"
import Image from "next/image"

export default function AboutWriter({authorName} : {authorName: string}){
    const authorData = [...authors].find((item) => item.name == authorName)
    return(
        <div className="mx-30 w-fit">
            <div className="bg-black text-white p-10 relative flex flex-col gap-5 rounded-t-3xl">
                <h3 className="text-lg font-bold">About Writer</h3>
                <div className="flex gap-3 items-center">
                    <Image src={authorData?.imageUrl || ''} className="rounded-full" alt={authorData?.name || ''} width={50} height={50} />
                    <div>
                        <p className="font-bold">{authorData?.name.split(' ')[0]}</p>
                        <p className="text-xs">{authorData?.position}</p>
                    </div>
                </div>
                <p>{authorData?.about}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#21C963] to-transparent opacity-30"></div>
            </div>         
            <div className="bg-[#279689] flex justify-between items-center px-10 py-5 text-white rounded-b-3xl">
                <p className="font-bold">Stay updated with {authorData?.name.split(' ')[0]}</p>
                <SocialMediaIcons fbUrl="#" igUrl="#" twitterUrl="#" linkUrl="#" />
            </div>   
        </div>
    )
}