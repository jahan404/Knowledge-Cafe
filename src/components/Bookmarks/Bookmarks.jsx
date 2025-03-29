
const Bookmarks = ({bookmarks,spentTime}) => {
    return (
        <div className="w-1/3"> 
            <h1 className="text-xl bg-slate-100 px-3  py-2 rounded-2xl text-center mb-3">Spent Time On Read : {spentTime} min</h1>

            <div className="bg-gray-300 rounded-2xl p-3">
               <h1 className="text-xl">Bookmarked Blogs : {bookmarks.length}</h1>

               <div>
                {
                    bookmarks.map((b,idx)=>
                        <div key={idx} >
                            <p className="bg-slate-100 my-3 rounded-xl pl-3 py-4 text-sm">{b.name}</p>
                        </div>
                    )
                }
               </div>
            </div>
        </div>
    );
};

export default Bookmarks;