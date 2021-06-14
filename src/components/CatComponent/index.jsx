export const CatComponent = (name , href) => {
    return (
        <div className="nav-link" href={href}> 
            {name}
        </div>
    )
}