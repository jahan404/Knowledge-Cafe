import profileImage from '../../../images/profile.png'

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto items-center py-3 border-b border-gray-400 mb-3'>
            <div>
                <h1 className='font-extrabold text-4xl'>Knowledge Cafe</h1>
            </div>

             <div>
             <img src={profileImage} alt="" />
             </div>
        </div>
    );
};

export default Navbar;