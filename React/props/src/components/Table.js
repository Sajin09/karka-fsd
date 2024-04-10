const Table = ({ myname, myage, mydegree, myrollnumber, ismarried, mystudent, myskills }) => {


    return (
        <div>
            <h2>
                <p>my name is {myname}</p>
                <p>my age is {myage}</p>
                <p>my degree is {mydegree}</p>
                <p>My rollnumber is {myrollnumber}</p>
                <p>{ismarried ? "Yes" : "No"}</p>
                <p>{mystudent.student1}</p>
                <p>{mystudent.student2}</p>
                <p>{mystudent.student3}</p>
                {/* {myskills.map((data) => {
            <ol>{data}</ol>
        })} */}
                {myskills.map((data) => (
                    <li>{data}</li>
                ))}

            </h2>
        </div>

    )
}

export default Table