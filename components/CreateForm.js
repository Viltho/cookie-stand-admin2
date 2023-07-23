import React from 'react'

const CreateForm = ({setObject, setFlag}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const objReceived = {
            location: e.target.location.value,
            min: e.target.min.value,
            max: e.target.max.value,
            avg: e.target.avg.value,
        }
        setObject(objReceived)
        setFlag(true)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p className='text-center text-2xl'>Create Cookie Stand</p>
            <div className='flex input_container_full_width'>
                <span>
                    Location
                </span>
                <input className='mx-2' name='location'/>
            </div>
            <div className='flex'>
                <div className='input_container'>
                    <p>Minimum Customers Per Hour</p>
                    <input name='min'/>
                </div>
                <div className='input_container'>
                    <p>Maximum Customers Per Hour</p>
                    <input name='max'/>
                </div>
                <div className='input_container'>
                    <p>Average Customers Per Hour</p>
                    <input name='avg' />
                </div>
                <button type='submit' className='btn_green'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateForm