interface HeaderProps{
    title:string
}
export function Header(
    {title}:HeaderProps
){

    return (
        <div>
            <h1>我是Header{title}</h1>
        </div>
    )
}