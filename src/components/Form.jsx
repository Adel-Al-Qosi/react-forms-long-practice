import { useState } from "react"

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [staff, setStaff] = useState('')
    const [bio, setBio] = useState('')
    const [notifications, setNotifications] = useState(false)

    const handleSubmission = (e) => {
        e.preventDefault()

        const submissionInformation = {
            name,
            email,
            phone,
            phoneType,
            staff,
            bio,
            notifications,
            dateOfSubmission: new Date()
        }

        console.log(submissionInformation)
    }

    return (
        <form onSubmit={handleSubmission}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} id="name" value={name} />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" value={email} />
            </div>

            <div>
                <label htmlFor="phone">Phone number:</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} id="phone" value={phone} />
                <select onChange={(e) => setPhoneType(e.target.value)} value={phoneType}>
                    <option value='' disabled>Phone type:</option>
                    <option value='home'>Home</option>
                    <option value='work'>Work</option>
                    <option value='mobile'>Mobile</option>
                </select>
            </div>

            <div>
                <label htmlFor="staff">Staff:</label>
                <div id='staff'>
                    <input name="staffType" type="radio" onChange={(e) => setStaff(e.target.value)} value={staff} />Instructor
                    <input name="staffType" type="radio" onChange={(e) => setStaff(e.target.value)} value={staff} />Student
                </div>
            </div>

            <div>
                <label htmlFor="bio" >Bio:</label>
                <textarea type="text" onChange={(e) => setBio(e.target.value)} id="bio" value={bio} />
            </div>

            <div>
                <label htmlFor="notifications">Sign up for email notifications:</label>
                <div id='notifications'>
                    <input onChange={(e) => setNotifications(e.target.checked)} type="checkbox" value={notifications} />Send me notifications
                </div>
            </div>

            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
    )
}