import background from"./background.jpeg";
function Background(){
    return(
        <div style={{backgroundImage:`url(${background})`,
        backgroundRepeat:"no-repeat",backgroundSize:"contain",
        height:600,width:600,backgroundAttachment:"fixed"}}>
            hello world

        </div>
    );
}
export {Background};