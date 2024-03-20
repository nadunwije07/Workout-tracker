import { useState } from 'react'


// The WorkoutForm component is a form that allows the user to add a new workout to the database.
const WorkoutForm = () => {
  const [title, setTitle] = useState('') 
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)


  // The handleSubmit function is called when the form is submitted. It sends a POST request to the /api/workouts endpoint with the workout data in the request body.
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    

    // The fetch function is used to send a POST request to the /api/workouts endpoint with the workout data in the request body. If the request is successful, the new workout is added to the database and the form is reset. If there is an error, the error message is displayed to the user.
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json() // The response from the server is parsed as JSON.

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
    }

  }


  // The form has three input fields for the title, load, and number of reps of the workout. The values of these input fields are stored in the component's state using the useState hook. When the form is submitted, the handleSubmit function is called, which sends a POST request to the /api/workouts endpoint with the workout data in the request body.
  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm