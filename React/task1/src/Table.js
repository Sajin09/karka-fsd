const Table = ({ myproducts }) => {
    return (
        <>
            <table className="table" border="1">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {myproducts.map((data, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td className="image"><img src={data.img} alt={data.Name}/></td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>


                        
                        </tr>
                    ))}

                </tbody>

            </table>
        </>
    );
};

export default Table;