function Example(){
    //const isloggedin=this.state.isloggedin;
   const isloggedin=false;
    return(
        <div>
            
               
               welcome{isloggedin ? 'back':'please login first'}
            
        </div>
    )
}
export default Example;