import profile from '../assets/images/profile.png'

export default function Header() {
    return (
        <>
            <header className='flex justify-between mx-4 p-3 border-b-2 items-center'>

                <h1 className='text-4xl  text-black-600 text-center '>Knowledge cafe</h1>
                <img src={profile} alt="" />
            </header>
        </>
    )
}
