import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import '../App.css'
import { Rating } from './Rating'
export const Filter = () => {
    const [rate, setRate] = useState(0)
    return (
        <div className="filters">
        <span className="title">Filter Products</span>
            <span>
              <Form.Check
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
              />
            </span>
              <span>
              <Form.Check
              inline
              label="Decending"
              name="group1"
              type="radio"
              id={`inline-2`}
              />
            </span>
              <span>
              <Form.Check
              inline
              label="Include Out of Stock"
              name="group1"
              type="checkbox"
              id={`inline-3`}
              />
            </span>
              <span>
              <Form.Check
              inline
              label="Fast Delivery Only"
              name="group1"
              type="checkbox"
              id={`inline-4`}
              />
            </span>
            <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating
             rating={rate}
              onClick={(i)=>setRate(i+1)} 
              style={{cursor:"pointer"}}></Rating>
            </span>
            <Button variant="light">CLear Filters</Button>
        </div>
    )
}
