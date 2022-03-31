import { useEffect, useState } from "react"
import axios from "axios"

const baseUrl = "http://localhost:9654/api/indicator/students-data";

export default function Student(props) {

    const [studentsData, setStudentsData] = useState({});

    useEffect(() => {
        axios
        .get(baseUrl, {
          headers: {
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*'
          },
        })
        .then((response) => {
            setStudentsData(response.data);
        });

    })

    return (
        <div>Estudantes...</div>
    )
}