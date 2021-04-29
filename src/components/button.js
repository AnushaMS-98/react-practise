var a=10;

function Button(){
    function click(){
        a =20;
        console.log(a);
        return a;
    }
    return (
        <>
        <div id="new">{a}</div>
        </>
    )
}
export default Button;