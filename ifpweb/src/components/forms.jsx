import React, {useState, useEffect} from 'react'

const Forms = () => {
    const [currentDate, setCurrentDate] = useState(null);

    useEffect(()=>{
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      });
      setCurrentDate(formattedDate);
    })

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Add your logic to save data to the database
    
        // Call the onSave callback to switch to the next tab
        onSave();
      };


  return (
    <div className='mt-5 border-gray-100 max-w-4xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Identification Data</h1>

<form onSubmit={handleSave}>
    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input value={currentDate || "06/11/23"} readOnly={true} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06/11/2023" required />
        </div>

        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Number</label>
            <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TN 10 AB 4141" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entry Time</label>
            <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9:15 AM" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>

        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 90983 78345" required/>
        </div>

      

    </div>

<div>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
        Signature
      </label>
      <div className="flex items-center">
        <label 
          className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
          htmlFor="user_avatar"
        >
          Choose File
        </label>
        <input 
          className="hidden"
          id="user_avatar" 
          type="file"
        />
        <span className="ml-3 text-sm text-gray-900 dark:text-gray-400" id="file_name">
          No Passenger Image defined
        </span>
      </div>
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
       
      </div>

</div>

    <button type="submit" class="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>
    </div>
  )
}

export default Forms