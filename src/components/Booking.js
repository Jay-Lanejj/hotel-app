import '../styles/booking.css'
import React,{useEffect, useState} from 'react'
import {db} from '../config/firebase' 
import {addDoc, collection} from 'firebase/firestore'

function Booking(){

    const [_name, setName] = useState("")
    const [_surname, setSurname] = useState("")
    // const [_email, setEmail] = useState("")
    const [_arrivalDate, setArrivalDate] = useState("")
    const [_departDate, setDepartDate] = useState("")
    const [_otherRequests, setOtherRequests] = useState("")
    const [_phoneNumber, setPhoneNumber] = useState('');
    

  
    // function addInfo(){
    //     const collectionReF = collection(db, "hotelInfo");
    //     const hotelInfo = {
    //         name:name,
    //         surname:surname,
    //         email:email,
    //         arrivalDate:arrivalDate,
    //         departDate:departDate,
    //         otherRequests:otherRequests,
    //     }
    //     addDoc(collectionReF, hotelInfo).then(()=>{
    //         alert("Booked Successfully")
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    //     // props.addInfo(name,surname,phoneNumber, email,arrivalDate,departDate,otherRequests);
    // )

    const collectionReF = collection(db, "hotelInfo");

    const  addHotel = ()=>{
       
     
        const hotelInfo = {
            name:_name,
            surname:_surname,
            // email:_email,
            arrivalDate:_arrivalDate,
            departDate:_departDate,
            otherRequests:_otherRequests,
        }
        addDoc(collectionReF, hotelInfo).then(()=>{
            alert("Booked Successfully")
            console.log('suceess')
        }).catch((error)=>{
            console.log(error);
        })
    }
 

    

    return(
        <>
            <div className="booking-heading"><h1>Hotel Booking</h1></div>
            <div className="formStyle">
                <label>Name</label><br></br>
                <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/><br></br>
                <label>Surname</label><br></br>
                <input type="text" placeholder="Enter surname" onChange={(e)=> setSurname(e.target.value)}/><br></br>
                <label>Phone Number</label><br></br>
                <input type="text" placeholder="Enter Phone number" onChange={(e)=> setPhoneNumber(e.target.value)}/><br></br>
                <label>Arrival Date</label><br></br>
                <input type="date" placeholder="MM / DD / YYYY" onChange={(e)=> setArrivalDate(e.target.value)}/><br></br>
                <label>Departure Date</label><br></br>
                <input type="date" placeholder="MM / DD / YYYY" onChange={(e)=> setDepartDate(e.target.value)}/><br></br>
                <label>Other requests</label><br></br>
                <textarea type="text" className="txt" onChange={(e)=> setOtherRequests(e.target.value)}/><br></br>
                <button id="btn" onClick={(e)=>{addHotel()}}>Complete Reservation</button>
            </div>
        </>
    )
}
export default Booking