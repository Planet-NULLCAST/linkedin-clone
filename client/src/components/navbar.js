
const navbar = () => {
    return (
        <nav className='flex items-center bg-gray-100'>
            <div className='flex items-center'>
                <div className='mr-2'>
                    <button>
                    <i class="fab fa-linkedin text-3xl"></i>
                    </button>
                </div>
                <div>
                    <div className='bg-gray-100 flex items-center  py-2'> 
                    <i class="fas fa-search opacity-60 px-2"></i>
                        <input  className='bg-gray-100 border-none w-72' type='text' placeholder='Search'></input>
                    </div>
                </div>
            </div>
            <ul className='flex items-center justify-center'>
                <li className=' flex flex-col items-center justify-center'>
                    <i class="fas fa-home"></i>
                    <label>Home</label>
                </li>
            </ul>
        </nav>
    )
}

export default navbar
