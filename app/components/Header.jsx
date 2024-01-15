export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 pb-10">
            <div>
                <a href="/"><h1 className="text-2xl font-bold ml-5">John Carraher</h1></a>
            </div>
            <div className="flex gap-4 mr-5">
                <a href="/projects" className="text-deselect hover:text-select font-medium">Projects</a>
                <a href="/resume" className="text-deselect hover:text-select font-medium">Resume</a>
            </div>
        </header>
    )
}