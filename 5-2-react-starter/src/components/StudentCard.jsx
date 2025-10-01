function StudentCard({name, id, dep}){
    return(
        <>
        <h3>Name: {name}</h3>
        <p>ID: {id}</p>
        <p>Department: {dep}</p>
        </>
    );
}
export default StudentCard;