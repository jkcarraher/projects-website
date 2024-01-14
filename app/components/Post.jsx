import Image from "next/image"
export default function Post({id, title, description, publishDate, readTime}){
    return (
        <div className="max-w-2xl mx-auto project-preview rounded-md p-6 mb-3">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>

            <p className="text-gray-600 mb-4 text-deselect">{description}</p>

            <div className="flex items-center justify-between text-deselect">
                <div className="flex items-center">
                <Image src="/calendar.svg" alt="Calendar" width={15} height={15}  className="mr-2" />
                <p className="text-sm">{publishDate}</p>
                </div>
                
                <div className="flex items-center">
                <Image src="/clock.svg" alt="Clock" width={15} height={15}  className="mr-2" />
                <p className="text-sm">{readTime}</p>
                </div>
            </div>
        </div>
    )
}