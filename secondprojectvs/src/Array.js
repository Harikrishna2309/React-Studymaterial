function Array(){
    const items=['pen','book','tabel','note','sketch'];
    return(
        <div>
            <ul>
                {items.map((item,i)=>(
                    <li key="{i}">{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Array;