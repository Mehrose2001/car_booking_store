import Link from "next/link";


let Home =()=>{
    return (
        <main className="min-h-screen">
            <h1 className="text-4xl font-bold dark:text-white"> Home page </h1>
            <br />
            <br />
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href='/'>Go back</Link>
            
        </main>
    )
}

export default Home;